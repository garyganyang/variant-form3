<template>
  <static-content-wrapper :designer="designer" :field="field" :design-state="designState"
                          :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                          :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
    <!--    <el-alert ref="fieldEditor" :title="field.options.title" :type="field.options.type"-->
    <!--              :description="field.options.description" :closable="field.options.closable"-->
    <!--              :center="field.options.center" :close-text="field.options.closeText"-->
    <!--              :show-icon="field.options.showIcon" :effect="field.options.effect" @close="handleCloseCustomEvent"></el-alert>-->
    <!--    :data="field.options.tableData"-->
    <el-table ref="fieldEditor"
              v-loading="fieldModel.loading"
              :data="fieldModel.data"
              :border="field.options.border"
              :height="field.options.tableHeight? field.options.tableHeight : '300px'"
              style="width: 100%;--el-table-header-bg-color: #fafafa;"
              empty-text="无数据"
              @header-click="onHeaderClick"
              @row-click="onRowClick"
              @row-dblclick="onRowDbClick"
              @cell-click="onCellClick"
              @cell-dblclick="onCellDbClick"
              @selection-change="onSelectionChange">
      <el-table-column type="index" label="#" width="50" fixed align="center"></el-table-column>

      <el-table-column v-for="each in field.options.columnList.filter(e=>e.isShow)"
                       :key="each.prop"
                       :prop="each.prop"
                       :label="each.label"
                       :min-width="each.minWidth"
                       :align="each.align"
                       :show-overflow-tooltip="each.showOverflowTooltip">
        <template v-if="each.displayType === 'string'" #default="scope">
          {{ scope.row[each.prop] }}
        </template>
        <template v-if="each.displayType === 'tag'" #default="scope">
          <el-tag type="primary" effect="light"> {{ scope.row[each.prop] }}</el-tag>
        </template>
        <template v-if="each.displayType === 'tags'" #default="scope">
          <el-tag v-for="item in scope.row[each.prop]" :key="item.label" type="primary" effect="light"> {{ item.label }}</el-tag>
        </template>
        <template v-if="each.displayType === 'avatar'" #default="scope">
          <div v-if="scope.row[each.prop]" style="height: 30px;">
            <el-avatar-group>
              <el-avatar :src="scope.row[each.prop]" :size="30"/>
            </el-avatar-group>
          </div>
          <div v-else style="color: lightgrey">暂无图片</div>
        </template>
        <template v-if="each.displayType === 'avatars'" #default="scope">
          <div v-if="scope.row[each.prop] && scope.row[each.prop].length" style="height: 30px;">
            <el-avatar-group>
              <el-avatar v-for="e in scope.row[each.prop]" :key="e.url" :src="e.url" :size="30"/>
            </el-avatar-group>
          </div>
          <div v-else style="color: lightgrey">暂无图片</div>
        </template>
        <template v-if="each.displayType === 'image'" #default="scope">
          <div v-if="scope.row[each.prop] && scope.row[each.prop].url" style="height: 30px;">
            <el-image :src="scope.row[each.prop].url"
                      :preview-src-list="[scope.row[each.prop].url]"
                      fit="fill"
                      :z-index="666"
                      :preview-teleported="true"
                      style="width: 30px; height: 30px"/>
          </div>
          <div v-else style="color: lightgrey">暂无图片</div>
        </template>
        <template v-if="each.displayType === 'images'" #default="scope">
          <div v-if="scope.row[each.prop] && scope.row[each.prop].length" style="height: 30px;">
            <el-image v-for="(e, i) in scope.row[each.prop]"
                      :key="e.url"
                      :src="e.url"
                      :preview-src-list="scope.row[each.prop].map(e=>e.url)"
                      fit="fill"
                      :initial-index="i"
                      :z-index="666"
                      :preview-teleported="true"
                      style="width: 30px; height: 30px;margin-right: 5px"/>
          </div>
          <div v-else style="color: lightgrey">暂无图片</div>
        </template>
        <!--        <template #default="scope">-->
        <!--          {{ dayjs(scope.row.updateTime || scope.row.creationTime).format('YYYY-MM-DD HH:mm:ss') }}-->
        <!--        </template>-->

      </el-table-column>
      <!--      field.options.columnList.filter(e=>e.isShow)-->
      <el-table-column v-if="field.options.actionList && field.options.actionList.length"
                       fixed="right"
                       label="操作"
                       align="center"
                       :width="field.options.actionColumnFixedWidth">
        <template #default="scope">
          <!--          1.先显示不需要折叠的按钮       -->
          <template v-for="e in field.options.actionList.filter(ee=>ee.isShow && !ee.isCollapsed)">
            <!--          1.1 显示不需要二次确认的按钮       -->
            <el-button v-if="!e.requireConfirm" link type="primary" @click="clickBtn(scope.row, scope.$index, e)">{{ e.label }}</el-button>
            <!--          1.2 显示需要二次确认的按钮       -->
            <el-popconfirm v-else
                           class="box-item"
                           width="160"
                           title="确定要这么做吗?"
                           placement="bottom"
                           @confirm.prevent="clickBtn(scope.row, scope.$index, e)">
              <template #reference>
                <el-button link type="primary">{{ e.label }}</el-button>
              </template>
            </el-popconfirm>
          </template>
          <!--          2.再显示需要折叠的按钮       -->
          <el-dropdown v-if="field.options.actionList.filter(ee=>ee.isShow && ee.isCollapsed).length"
                       trigger="click"
                       style="margin-left: 12px;padding: 5px 2px 0 2px">
            <span class="el-dropdown-link">更多<el-icon class="el-icon--right"><arrow-down/></el-icon></span>
            <template #dropdown>
              <div class="custom-dropdown">
                <template v-for="e in field.options.actionList.filter(ee=>ee.isShow && ee.isCollapsed)">
                  <!--          2.1 显示不需要二次确认的按钮       -->
                  <el-button v-if="!e.requireConfirm" link type="primary" @click="clickBtn(scope.row, scope.$index, e)">{{ e.label }}</el-button>
                  <!--          2.2 显示需要二次确认的按钮       -->
                  <el-popconfirm v-else
                                 class="box-item"
                                 width="160"
                                 title="确定要这么做吗?"
                                 placement="bottom"
                                 @confirm.prevent="clickBtn(scope.row, scope.$index, e)">
                    <template #reference>
                      <el-button link type="primary">{{ e.label }}</el-button>
                    </template>
                  </el-popconfirm>
                </template>
              </div>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <div class="mt-4 w-full flex justify-end">
      <el-pagination class=""
                     v-model:current-page="fieldModel.pageNum"
                     :page-sizes="[10, 20, 30, 50, 100]"
                     :page-size="fieldModel.pageSize"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="fieldModel.totalElements"
                     @size-change="onPageSizeChange"
                     @current-change="onPageNumChange">
      </el-pagination>
    </div>
  </static-content-wrapper>
</template>

<script>
import StaticContentWrapper from '@/components/form-designer/form-widget/field-widget/static-content-wrapper'
import emitter from '@/utils/emitter'
import i18n from "@/utils/i18n"
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin"
import {ArrowDown} from "@element-plus/icons-vue";

export default {
  name: "el-table-widget",
  componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  props: {
    field: {
      type: Object,
      default: () => {
        return {
          options: {
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
    ArrowDown,
    StaticContentWrapper,
  },
  data() {
    return {
      fieldModel: {
        loading: false,
        pageSize: 10,
        pageNum: 1,
        totalElements: 0,
        data: [],
        data1: [{}, {}, {}, {}, {
          avatar: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          avatars: [
            {"url": "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"},
          ],
          image: {"url": "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"},
          images: [
            {"url": "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"},
          ]
        }]
      },
    }
  },
  created() {
    this.registerToRefList()
    this.initEventHandler()
  },
  mounted() {
    this.handleOnMounted()
  },
  beforeUnmount() {
    this.unregisterFromRefList()
  },
  methods: {
    handleCloseCustomEvent() {
      if (!!this.field.options.onClose) {
        let changeFn = new Function(this.field.options.onClose)
        changeFn.call(this)
      }
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
    clickBtn(row, index, btnConfig) {
      if (btnConfig.onClick) {
        const customFn = new Function('row', 'rowIndex', 'btnConfig', btnConfig.onClick)
        return customFn.call(this, row, index, btnConfig)
      }
    },
  }
}
</script>

<style lang="scss">
.mt-4 {
  margin-top: 1rem;
}

.justify-end {
  justify-content: flex-end;
}

.w-full {
  width: 100%;
}

.flex {
  display: flex;
}

.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

/* 美化样式，和原生下拉一样好看 */
.custom-dropdown {
  padding: 5px 0;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.custom-dropdown .el-button {
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 20px;
  margin: 0;
}
</style>
