<template>
  <el-dialog v-model="visible"
             :title="curPosition.address"
             width="632px"
             header-class="border-b pt-[12px] pb-[12px] pl-[32px]"
             body-class="p-0"
             footer-class="border-t">
    <!-- 地图容器：必须设置宽高 -->
    <div ref="mapRef" class="map-container" style="position: relative">
      <img src="./grn-circle.png" class="icon-class" style="">
    </div>
    <template #footer>
        <span class="dialog-footer flex justify-end gap-2">
      <el-button @click="visible = false">关闭</el-button>
      <el-button type="primary" @click="handleSubmit">确定</el-button>
        </span>
    </template>
  </el-dialog>
</template>

<script setup>
/////////////////////////////////   外部依赖导入    //////////////////////////
import {onMounted, onUnmounted, ref, nextTick, onBeforeUnmount} from "vue"
import {Edit} from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from "element-plus";
import axios from 'axios'
// 引入 OL 核心模块
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {fromLonLat, get as getProjection, toLonLat} from 'ol/proj';
import {XYZ} from "ol/source";
import {Feature} from "ol";
import {Point} from "ol/geom";
import {Fill, Stroke, Style} from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import CircleStyle from "ol/style/Circle"; // 坐标转换（经纬度转墨卡托）
/////////////////////////////////   组件参数    //////////////////////////
const props = defineProps({
  tdtKey: {
    type: String,
    required: true,
    default: "b67f3a716250c0feb8b4677a4454a20e" //
  },
});
/////////////////////////////////   私有变量定义    //////////////////////////
const emit = defineEmits(['onConfirm'])
const visible = ref(false);

// 1. 定义 ref 指向地图容器 DOM 元素
const mapRef = ref();
const curPosition = ref({
  address: "地图选点",
  coords: {lon: 104.065015, lat: 30.656145, ver: 1}
});
// 2. 定义变量存储地图实例（避免响应式，用普通变量即可）
let map = null;


/////////////////////////////////   生命周期方法 //////////////////////////
onMounted(() => {
});
onBeforeUnmount(() => {

})
onUnmounted(() => {
  if (map) {
    // 移除地图所有图层和交互
    map.setTarget(null);
    map = null;
  }
});
/////////////////////////////////   页面方法    //////////////////////////
const show = async (data) => {
  if (map) {
    // 移除地图所有图层和交互
    map.setTarget(null);
    map = null;
  }
  if (data) curPosition.value = data
  visible.value = true
  await nextTick();
  initiateMap()
}
const initiateMap = () => {
  // 确保容器 DOM 已挂载
  // if (!mapRef.value) return;
  // 3. 注册天地图坐标系（可选：解决国内偏移问题）
  // 天地图使用GCJ-02坐标系，OL默认是EPSG:3857，注册后可精准匹配
  //   proj4.defs('EPSG:3857', '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs');
  //   register(proj4);

  // 创建天地图图层：矢量底图 + 矢量注记（文字）
  const vecLayer = createTDTLayer('vec', 1); // 矢量底图
  const cvaLayer = createTDTLayer('cva', 2); // 矢量注记（必须叠加，否则无文字）
  // 若需影像底图，替换为：
  // const imgLayer = createTDTLayer('img', 1); // 影像底图
  // const ciaLayer = createTDTLayer('cia', 2); // 影像注记

  // 初始化 OL 地图实例
  map = new Map({
    // 绑定地图容器
    target: mapRef.value,
    // 地图图层（这里用开源的 OSM 底图）
    layers: [
      vecLayer, // 底图
      cvaLayer  // 注记（文字标签）
      // imgLayer,
      // ciaLayer
      // new TileLayer({
      //   source: new OSM()
      // })
    ],
    // 地图视图（中心点、缩放级别）
    view: new View({
      center: fromLonLat([curPosition.value.coords.lon, curPosition.value.coords.lat]), // 成都经纬度转墨卡托
      zoom: 10, // 缩放级别（越大越详细）
      minZoom: 3, // 最小缩放
      maxZoom: 18 // 最大缩放
    })
  });
  // const centerCoord = map.getView().getCenter();
  // const centerPointFeature = new Feature({
  //   geometry: new Point(centerCoord)
  // });
  //
  // // 修复：所有样式类必须 new 实例化
  // const pointStyle = new Style({
  //   image: new CircleStyle({
  //     radius: 4,
  //     fill: new Fill({color: '#ff0000'}),
  //     stroke: new Stroke({color: '#ffffff', width: 2})
  //   })
  // });
  // centerPointFeature.setStyle(pointStyle); // 赋值样式
  //
  // const vectorLayer = new VectorLayer({
  //   source: new VectorSource({features: [centerPointFeature]}),
  //   zIndex: 999
  // });
  // map.addLayer(vectorLayer); // 此时执行无错


  map.on('moveend', (evt) => {
    const [lon, lat] = toLonLat(map.getView().getCenter());
    curPosition.value.coords.lon = lon
    curPosition.value.coords.lat = lat
    console.log('当前中心经纬度：', lon.toFixed(6), lat.toFixed(6));
    getCurAddressDetail()
  });

}
// 4. 构建天地图图层（封装为函数，方便复用）
const createTDTLayer = (type, zIndex = 0) => {
  // 瓦片地址模板（支持t0-t7服务器）
  const urlTemplate = `https://t{0-7}.tianditu.gov.cn/${type}_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${type}&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${props.tdtKey}`;

  return new TileLayer({
    source: new XYZ({
      url: urlTemplate,
      projection: getProjection('EPSG:3857'), // 匹配OL坐标系
      tileLoadFunction: (tile, src) => {
        // 解决瓦片跨域问题（部分场景需要）
        tile.getImage().src = src;
      }
    }),
    zIndex: zIndex // 图层层级（注记图层要在底图之上）
  });
};
const getCurAddressDetail = () => {
  const postStr = JSON.stringify(curPosition.value.coords)
  const params = {
    postStr,
    type: "geocode",
    tk: props.tdtKey
  }
  axios.get(`https://api.tianditu.gov.cn/geocoder`, {params}).then(res => {
    console.log(res.data)
    if (res.data.msg !== "ok") {
      console.error(res.data.msg)
      return
    }
    curPosition.value.address = res.data.result.formatted_address
    curPosition.value.addressComponent = res.data.result.addressComponent

  }).catch(err => {
    console.error(err)
  })
}
const handleSubmit = () => {
  emit("onConfirm", curPosition.value)
  visible.value = false
}


/////////////////////////////////   暴露内部方法，让父组件可以访问    //////////////////////////
defineExpose({
  show
});
</script>

<!-- 不加 scoped，用命名空间限制样式作用域 -->
<style scoped lang="scss">
:deep(.el-dialog) {

}

.map-container {
  width: 600px;
  height: 400px;
}

.icon-class {
  position: absolute;
  width: 32px;
  height: 32px;
  top: 168px;
  left: 284.5px;
  z-index: 999
}
</style>
