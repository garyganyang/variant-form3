<template>
  <static-content-wrapper :designer="designer" :field="field" :design-state="designState"
                          :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                          :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
    <div ref="fieldEditor"
         class="scoped-list-table"
         :style="{width:field.options.tableWidth || '100%', height:field.options.tableHeight || '100%'}"></div>
  </static-content-wrapper>
</template>

<script>
import StaticContentWrapper from '@/components/form-designer/form-widget/field-widget/static-content-wrapper'
import emitter from '@/utils/emitter'
import i18n from "@/utils/i18n"
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin"
import {VTableSheet} from '@visactor/vtable-sheet';
import * as VTablePlugins from '@visactor/vtable-plugins';
import {markRaw} from "vue";

export default {
  name: "v-sheet-table-widget",
  componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  props: {
    field: {
      type: Object,
      default: () => {
        return {
          options: {
            tableWidth: '100%',
            tableHeight: '300px',
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
      tableInstance: null,
      defaultTableOptions: {
        undoRedo: {show: true},
        VTablePluginModules: [
          {module: VTablePlugins.TableExportPlugin},
          {module: VTablePlugins.ExcelImportPlugin},
        ],
        mainMenu: {
          show: true,
          items: [
            {name: '导入', description: '导入数据替换到当前sheet', menuKey: 'import'},
            {
              name: '导出', items: [
                {name: '导出CSV', description: '导出当前sheet数据', menuKey: 'export-current-sheet-csv'},
                {name: '导出XLSX', menuKey: 'export-current-sheet-xlsx'},
              ]
            },
            {
              name: '测试',
              description: '测试',
              onClick: () => {
                console.log('测试');
              }
            }
          ]
        },
        dragOrder: {
          enableDragColumnOrder: true,
          enableDragRowOrder: true
        },
        sheets: [
          {
            sheetKey: 'sheet1',
            sheetTitle: 'sheet1',
          },
          // {
          //   sheetKey: 'sheet2',
          //   sheetTitle: '销售数据',
          //   columns: [
          //     {title: '产品', width: 120},
          //     {title: '一季度', width: 100},
          //     {title: '二季度', width: 100},
          //     {title: '三季度', width: 100},
          //     {title: '四季度', width: 100},
          //     {title: '总计', width: 100}
          //   ],
          //   data: [
          //     ['产品A', 1200, 1500, 1800, 2000, 6500],
          //     ['产品B', 2500, 2800, 3000, 3500, 11800],
          //     ['产品C', 900, 950, 1100, 1300, 4250],
          //     ['产品D', 500, 650, 800, 950, 2900],
          //   ],
          //   active: true,
          //   filter: true,
          //   widthMode: 'autoWidth',
          //   // frozenRowCount: 1,
          //   // frozenColCount: 1
          // },
        ],
        // autoFillHeight: false,
        // overscrollBehavior: 'auto',
        // scrollEventAlwaysTrigger: true, // 新增：优先阻断wheel向外冒泡
        // listenContainerSizeChange: true,
        // widthMode: "adaptive",
        // select: {
        //   highlightMode: "row",
        // },
        // resize: {
        //   columnResizeMode: "none"
        // },
        // sheets: [],
        // mainMenu: {},
        // emptyTip: {
        //   text: '无数据',
        //   icon: {
        //     width: 40,
        //     height: 40,
        //   }
        // }
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
    this.unregisterFromRefList()
  },
  watch: {
    fieldModel: {
      handler(val, oldVal) {
        // console.log("fieldModel", val, oldVal)
      },
      immediate: true,
    },
  },
  methods: {
    onThisMounted() {
      this.$nextTick(() => {
        // 1.先实例表格
        if (this.tableInstance) {
          this.tableInstance.release()
          this.tableInstance = null
        }
        this.tableInstance = markRaw(
          new VTableSheet(this.$refs.fieldEditor, {...this.defaultTableOptions, ...this.field.options})
        )
        this.handleOnMounted()
        // const columns = [
        //   {
        //     field: 'index',
        //     title: '序号1',
        //     width: '80px',
        //     headerStyle: {
        //       bgColor: "#fafafa",
        //       borderColor: "#ebeef5",
        //       borderLineWidth: 1 / 2,
        //       fontSize: 14,
        //       color: "#909399",
        //       fontWeight: 600,
        //       fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
        //     }
        //   },
        //   {
        //     field: 'field1',
        //     title: '字段一',
        //     width: 'calc((100% - 80px) / 2)',
        //     headerStyle: {
        //       bgColor: "#fafafa",
        //       borderColor: "#ebeef5",
        //       borderLineWidth: 1,
        //       fontSize: 14,
        //       color: "#909399",
        //       fontWeight: 600,
        //       fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
        //     }
        //   },
        //   {
        //     field: 'field2',
        //     title: '字段二',
        //     width: 'calc((100% - 80px) / 2)',
        //     headerStyle: {
        //       bgColor: "#fafafa",
        //       borderColor: "#ebeef5",
        //       borderLineWidth: 1,
        //       fontSize: 14,
        //       color: "#909399",
        //       fontWeight: 600,
        //       fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif',
        //     }
        //   }
        // ];
        // const records = [
        //   {index: 1, "field1": "张三1", "age": 20, "sex": "male", "field2": "123456789", "address": "北京市海淀区"},
        //   {index: 2, "field1": "李四2", "age": 30, "sex": "female", "field2": "23456789", "address": "北京市海淀区"},
        //   {index: 1, "field1": "张三3", "age": 20, "sex": "male", "field2": "123456789", "address": "北京市海淀区"},
        //   {index: 2, "field1": "李四4", "age": 30, "sex": "female", "field2": "23456789", "address": "北京市海淀区"},
        //   {index: 1, "field1": "张三5", "age": 20, "sex": "male", "field2": "123456789", "address": "北京市海淀区"},
        //   {index: 2, "field1": "李四6", "age": 30, "sex": "female", "field2": "23456789", "address": "北京市海淀区"},
        //   {index: 3, "field1": "王五7", "age": 40, "sex": "male", "field2": "3456789", "address": "北京市海淀区"}
        // ];
        //
        // this.tableInstance.updateColumns(columns);
        // this.tableInstance.setRecords(records);
      })
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
  overflow: hidden !important; /* vtable内部自己管理滚动，dom层禁止任何滚动 */
  overscroll-behavior: none; /* css层面阻断滚动链，阻止wheel向上冒泡给父滚动容器 */
}
</style>
