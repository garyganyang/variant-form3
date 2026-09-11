<template>
  <static-content-wrapper :designer="designer" :field="field" :design-state="designState"
                          :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                          :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
    <div ref="mapRef"
         :style="{
      width: field.options.width,
      height: field.options.height
    }">
    </div>
  </static-content-wrapper>
</template>

<script>
import StaticContentWrapper from '@/components/form-designer/form-widget/field-widget/static-content-wrapper'
import emitter from '@/utils/emitter'
import i18n from "@/utils/i18n"
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin"
import TileLayer from "ol/layer/Tile";
import {XYZ} from "ol/source";
import {fromLonLat, toLonLat, get as getProjection} from "ol/proj";
import Map from "ol/Map";
import View from "ol/View";
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import CircleGeom from 'ol/geom/Circle'; // 地理圆（米为单位）
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import {Fill, Stroke, Style, Icon, IconImage, Image, Circle as CircleStyle} from "ol/style";

export default {
  name: "tianditu-map-widget",
  componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  props: {
    field: {
      type: Object,
      default: () => {
        return {
          options: {
            width: '100%',
            height: '50vh',
            tdtKey: 'b67f3a716250c0feb8b4677a4454a20e',
            defaultLon: 104.065015,
            defaultLat: 30.656145,
            border: null,
            actionColumnFixedWidth: 120,
            onHeaderClick: null,
            onRowClick: null,
            onRowDoubleClick: null,
            onCellClick: null,
            onCellDoubleClick: null,
            onSelectionChange: null,
            onPageSizeChange: null,
          }
        }
      }
    },
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,

    designState: {
      type: Boolean,
      default: false
    },

    subFormRowIndex: { /* 子表单组件行索引，从0开始计数 */
      type: Number,
      default: -1
    },
    subFormColIndex: { /* 子表单组件列索引，从0开始计数 */
      type: Number,
      default: -1
    },
    subFormRowId: { /* 子表单组件行Id，唯一id且不可变 */
      type: String,
      default: ''
    },
  },
  components: {
    StaticContentWrapper,
  },
  data() {
    return {
      fieldModel: {
        data: [],
      },
      mapInstance: null,
      ol: {
        Feature,
        layer: {
          VectorLayer
        },
        source: {
          VectorSource
        },
        proj: {
          fromLonLat, toLonLat, getProjection,
        },
        geom: {
          Point, CircleGeom
        },
        style: {
          Fill, Stroke, Style, Icon, IconImage, Image, CircleStyle
        }
      }
    }
  },
  created() {
    this.registerToRefList()
    this.initEventHandler()
  },
  mounted() {
    this.onThisMounted()
  },
  beforeUnmount() {
    if (this.mapInstance) {
      // 移除地图所有图层和交互
      this.mapInstance.setTarget(null);
      this.mapInstance = null;
    }
    this.unregisterFromRefList()
  },
  watch: {
    fieldModel: {
      handler(val, oldVal) {
        console.log("fieldModel", val, oldVal)
      },
      immediate: true,
    },
  },
  methods: {
    onThisMounted() {
      this.$nextTick(() => {
        this.initiateMap()
        this.handleOnMounted()
      })
    },
    initiateMap() {
      // 创建天地图图层：矢量底图 + 矢量注记（文字）
      const vecLayer = this.createTDTLayer('vec', 1, this.field.options.tdtKey); // 矢量底图
      const cvaLayer = this.createTDTLayer('cva', 2, this.field.options.tdtKey); // 矢量注记（必须叠加，否则无文字）
      // 若需影像底图，替换为：
      // const imgLayer = this.createTDTLayer('img', 1); // 影像底图
      // const ciaLayer = this.createTDTLayer('cia', 2); // 影像注记

      // 初始化 OL 地图实例
      this.mapInstance = new Map({
        // 绑定地图容器
        target: this.$refs.mapRef,
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
          center: fromLonLat([this.field.options.defaultLon, this.field.options.defaultLat]), // 成都经纬度转墨卡托
          zoom: 10, // 缩放级别（越大越详细）
          minZoom: 3, // 最小缩放
          maxZoom: 18 // 最大缩放
        })
      });
    },
    createTDTLayer: (type, zIndex = 0, tdtKey) => {
      // 瓦片地址模板（支持t0-t7服务器）
      const urlTemplate = `https://t{0-7}.tianditu.gov.cn/${type}_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=${type}&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${tdtKey}`;

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
    },


    onHeaderClick(column, event) {
      if (this.field.options.onHeaderClick) {
        const customFn = new Function('column', 'event', this.field.options.onHeaderClick)
        return customFn.call(this, column, event)
      }
    },
    onRowClick(row, column, event) {
      if (this.field.options.onRowClick) {
        const customFn = new Function('row', 'column', 'event', this.field.options.onRowClick)
        return customFn.call(this, row, column, event)
      }
    },
    onRowDbClick(row, column, event) {
      if (this.field.options.onRowDoubleClick) {
        const customFn = new Function('row', 'column', 'event', this.field.options.onRowDoubleClick)
        return customFn.call(this, row, column, event)
      }
    },
    onCellClick(row, column, cell, event) {
      if (this.field.options.onCellClick) {
        const customFn = new Function('row', 'column', 'cell', 'event', this.field.options.onCellClick)
        return customFn.call(this, row, column, cell, event)
      }
    },
    onCellDbClick(row, column, cell, event) {
      if (this.field.options.onCellDoubleClick) {
        const customFn = new Function('row', 'column', 'cell', 'event', this.field.options.onCellDoubleClick)
        return customFn.call(this, row, column, cell, event)
      }
    },
    onSelectionChange(selection) {
      this.selectionList = selection
      if (this.field.options.onSelectionChange) {
        const customFn = new Function('selection', this.field.options.onSelectionChange)
        return customFn.call(this, selection)
      }
    },
    onPageSizeChange(pageSize) {
      if (this.field.options.onPageSizeChange) {
        const customFn = new Function('pageNum', 'pageSize', this.field.options.onPageSizeChange)
        return customFn.call(this, this.fieldModel.pageNum, pageSize)
      }
    },
    onPageNumChange(pageNum) {
      if (this.field.options.onPageNumChange) {
        const customFn = new Function('pageNum', 'pageSize', this.field.options.onPageNumChange)
        return customFn.call(this, pageNum, this.fieldModel.pageSize)
      }
    },
  }
}
</script>

<style lang="scss">
.scoped-list-table {
  //overflow: hidden !important; /* vtable内部自己管理滚动，dom层禁止任何滚动 */
  //overscroll-behavior: none; /* css层面阻断滚动链，阻止wheel向上冒泡给父滚动容器 */
}
</style>
