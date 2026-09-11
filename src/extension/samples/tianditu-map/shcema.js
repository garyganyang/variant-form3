export const mySchema = {
  type: 'tianditu-map',
  icon: 'map',
  formItemFlag: false,
  options: {
    name: '',
    width: '100%',
    height: '50vh',
    tdtKey: 'b67f3a716250c0feb8b4677a4454a20e',
    defaultLon: 104.065015,
    defaultLat: 30.656145,
    // defaultValue: '',
    // placeholder: '请从地图上选择',
    // labelWidth: null,
    // labelHidden: false,
    // disabled: false,
    // hidden: false,
    // required: false,
    // requiredHint: '',
    // -------------------
    // -------------------
    onMounted: "// 所有用法参考openLayers: ^10.7.0 https://openlayers.org/en/latest/apidoc/, 让AI来生成代码最好\nconst {\n  Feature,\n  layer: { VectorLayer },\n  source: { VectorSource },\n  proj: { fromLonLat, toLonLat, getProjection },\n  geom: { Point, CircleGeom },\n  style: { Fill, Stroke, Style, Icon, IconImage, CircleStyle }\n} = this.ol\nconst map = this.mapInstance\n\n\n// 矢量数据源，存放所有marker、图形\nconst vectorSource = new VectorSource();\nconst vectorLayer = new VectorLayer({\n  source: vectorSource,\n  zIndex: 9 // ★★★★★★★ 图层的高度, 这个要控制好 ★★★★★★★★★\n})\n// 把矢量图层加入地图实例，放在瓦片图层上面\nmap.addLayer(vectorLayer)\n\n\n// 1. 构造点要素\nconst pointFeature = new Feature({\n  geometry: new Point(fromLonLat([104.07, 30.67])) // 成都经纬度示例\n})\n// 2. 设置圆形样式\npointFeature.setStyle(new Style({\n  image: new CircleStyle({\n    radius: 80, // 像素\n    fill: new Fill({color:'#409eff'}),\n    stroke: new Stroke({color:'#fff', width:2})\n  })\n}))\n// 3. 添加进数据源，地图立刻渲染\nvectorSource.addFeature(pointFeature)",
    // onHeaderClick: '',
    // onRowClick: '',
    // onRowDoubleClick: '',
    // onCellClick: '',
    // onCellDoubleClick: '',
  }
}
