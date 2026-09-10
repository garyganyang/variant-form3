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
import {markRaw} from 'vue'
import StaticContentWrapper from '@/components/form-designer/form-widget/field-widget/static-content-wrapper'
import emitter from '@/utils/emitter'
import i18n from "@/utils/i18n"
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin"
import * as VTable from '@visactor/vtable';

export default {
  name: "v-list-table-widget",
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
        autoFillHeight: false,
        overscrollBehavior: 'auto',
        scrollEventAlwaysTrigger: true, // 新增：优先阻断wheel向外冒泡
        listenContainerSizeChange: true,
        widthMode: "adaptive",
        select: {
          highlightMode: "row",
        },
        resize: {
          columnResizeMode: "none"
        },
        columns: [],
        records: [],
        emptyTip: {
          text: '无数据',
          icon: {
            width: 40,
            height: 40,
          }
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
    // 删掉所有 _wheelHandler removeEventListener 代码
    if (this.tableInstance) {
      this.tableInstance.release();
      this.tableInstance = null;
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
        // 1.先实例表格
        if (this.tableInstance) {
          this.tableInstance.release()
          this.tableInstance = null
        }
        this.tableInstance = markRaw(
          new VTable.ListTable(this.$refs.fieldEditor, {...this.defaultTableOptions, ...this.field.options})
        )
        // this.tableInstance = new VTable.ListTable(this.$refs.fieldEditor, this.defaultTableOptions);
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
  //overflow: hidden !important; /* vtable内部自己管理滚动，dom层禁止任何滚动 */
  //overscroll-behavior: none; /* css层面阻断滚动链，阻止wheel向上冒泡给父滚动容器 */
}
</style>
