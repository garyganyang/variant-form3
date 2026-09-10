export const mySchema = {
  type: 'v-list-table',
  icon: 'table',
  formItemFlag: false,
  options: {
    name: '',
    tableWidth: '100%',
    tableHeight: 'calc(240px)',
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
    onMounted: "const headerStyle = {\n              bgColor: \"#fafafa\",\n              borderColor: \"#ebeef5\",\n              borderLineWidth: 1 / 2,\n              fontSize: 14,\n              color: \"#909399\",\n              fontWeight: 600,\n              fontFamily: '\"Helvetica Neue\", Helvetica, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"微软雅黑\", Arial, sans-serif',\n            }\nconst columns = [\n          {\n            field: 'index',\n            title: '序号',\n            width: '80px',\n            headerStyle\n          },\n          {\n            field: 'field1',\n            title: '字段一',\n            width: 'calc((100% - 80px) / 2)',\n            headerStyle\n          },\n          {\n            field: 'field2',\n            title: '字段二',\n            width: 'calc((100% - 80px) / 2)',\n            headerStyle\n          }\n        ];\nconst records = [\n          {index: 1, \"field1\": \"张三\", \"age\": 20, \"sex\": \"male\", \"field2\": \"123456789\", \"address\": \"北京市海淀区\"},\n          {index: 2, \"field1\": \"李四\", \"age\": 30, \"sex\": \"female\", \"field2\": \"23456789\", \"address\": \"北京市海淀区\"},\n          {index: 3, \"field1\": \"王五\", \"age\": 40, \"sex\": \"male\", \"field2\": \"3456789\", \"address\": \"北京市海淀区\"}\n        ];\n// 这里拿到tableInstance后,就可以按官方文档那样来操作listTable了\n// 官方文档 https://www.visactor.com/vtable/api/Methods\nthis.tableInstance.updateColumns(columns);\nthis.tableInstance.setRecords(records);\n\n",
    // onHeaderClick: '',
    // onRowClick: '',
    // onRowDoubleClick: '',
    // onCellClick: '',
    // onCellDoubleClick: '',
  }
}
