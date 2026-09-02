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
              v-loading="field.options.loading"
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
          {{ each.formatter ? stringFormatter(scope.row, each.formatter) : scope.row[each.prop] }}
        </template>
        <template v-if="each.displayType === 'tag'" #default="scope">
          <el-tag :type="getFixedType(scope.row[each.prop])" effect="light"> {{ scope.row[each.prop] }}</el-tag>
        </template>
        <template v-if="each.displayType === 'tags'" #default="scope">
          <div class="flex-row-gap">
            <el-tag v-for="item in scope.row[each.prop]" :key="item" :type="getFixedType(item)" effect="light"> {{ item }}</el-tag>
          </div>
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
        <template v-if="each.displayType === 'files'" #default="scope">
          <el-popover placement="right" :width="400" trigger="click">
            <template #reference>
              <el-button link type="primary" style="">{{ scope.row[each.prop] ? scope.row[each.prop].length : 0 }} 个文件</el-button>
            </template>
            <el-table :data="scope.row[each.prop]"
                      :border="true"
                      style="width: 100%;--el-table-header-bg-color: #fafafa;"
                      empty-text="无数据">
              <el-table-column type="index" label="#" width="50" fixed align="center"></el-table-column>
              <el-table-column align="left" label="文件名" prop="indexName" min-width="300">
                <template #default="scope">
                  <a :href="scope.row.url" :download="scope.row.name">
                    {{ scope.row.name }}
                  </a>
                </template>
              </el-table-column>
            </el-table>
          </el-popover>
        </template>
        <template v-if="each.displayType === 'svgString'" #default="scope">
          <div class="svg-wrap" v-html="scope.row[each.prop]"></div>
        </template>
        <template v-if="each.displayType === 'jsonArray'" #default="scope">
          <div v-if="scope.row[each.prop] && scope.row[each.prop].length">
            <span>{{ scope.row[each.prop].map(e => e.label).join("、") }}</span>
          </div>
        </template>
        <template v-if="each.displayType === 'jsonMap'" #default="scope">
          <span>{{ scope.row[each.prop] ? scope.row[each.prop].label : '' }}</span>
        </template>
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
            <el-button v-if="!e.requireConfirm && !isHidden(scope.row, scope.$index, e)" :disabled="isDisabled(scope.row, scope.$index, e)" link type="primary" @click="clickBtn(scope.row, scope.$index, e)">{{ e.label }}</el-button>
            <!--          1.2 显示需要二次确认的按钮       -->
            <el-popconfirm v-if="e.requireConfirm"
                           class="box-item"
                           width="160"
                           title="确定要这么做吗?"
                           placement="bottom"
                           @confirm.prevent="clickBtn(scope.row, scope.$index, e)">
              <template #reference>
                <el-button v-if="!isHidden(scope.row, scope.$index, e)" :disabled="isDisabled(scope.row, scope.$index, e)" link type="primary">{{ e.label }}</el-button>
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
                  <el-button v-if="!e.requireConfirm && !isHidden(scope.row, scope.$index, e)" :disabled="isDisabled(scope.row, scope.$index, e)" link type="primary" @click="clickBtn(scope.row, scope.$index, e)">{{ e.label }}</el-button>
                  <!--          2.2 显示需要二次确认的按钮       -->
                  <el-popconfirm v-if="e.requireConfirm"
                                 class="box-item"
                                 width="160"
                                 title="确定要这么做吗?"
                                 placement="bottom"
                                 @confirm.prevent="clickBtn(scope.row, scope.$index, e)">
                    <template #reference>
                      <el-button v-if="!isHidden(scope.row, scope.$index, e)" :disabled="isDisabled(scope.row, scope.$index, e)" link type="primary">{{ e.label }}</el-button>
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
        // loading: false,
        pageSize: 10,
        pageNum: 1,
        totalElements: 0,
        data: [],
        data1: [{}, {}, {}, {}, {
          tags: ["asd", "sdf", "ert", "ert", "公开", "隐藏"],
          jsonArray: [{"label": "大型工程机械检测1", "value": "LARGE_CONSTRUCTION_MACHINERY_DETECTION"}, {"label": "大型工程机械检测2", "value": "LARGE_CONSTRUCTION_MACHINERY_DETECTION"}],
          jsonMap: {"label": "大型工程机械检测", "value": "LARGE_CONSTRUCTION_MACHINERY_DETECTION"},
          svg: '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1782438629204" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1217" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M265.12 263m53.52 0l541.78 0q53.52 0 53.52 53.52l0 320.52q0 53.52-53.52 53.52l-541.78 0q-53.52 0-53.52-53.52l0-320.52q0-53.52 53.52-53.52Z" fill="#FDCE1C" p-id="1218"></path><path d="M790.48 409.97m-57.19 0a57.19 57.19 0 1 0 114.38 0 57.19 57.19 0 1 0-114.38 0Z" fill="#FFFFFF" p-id="1219"></path><path d="M631.99 564.29l-23.98 23.98c-9.83 9.83-25.76 9.83-35.58 0L418.69 434.53c-12.76-12.76-33.45-12.76-46.21 0L118.8 688.21c-20.59 20.59-6.01 55.78 23.11 55.78h637.12c29.11 0 43.69-35.2 23.11-55.78L678.22 564.29c-12.76-12.76-33.45-12.76-46.21 0z" fill="#28EB71" p-id="1220"></path></svg>',
          avatar: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          avatars: [
            {"url": "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"},
            {"url": "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg"},
          ],
          files: [
            {
              "url": "/epms-f/wayline_files/公司楼顶交通巡检演示.kmz",
              "name": "公司楼顶交通巡检演示1.kmz",
              "wpml_url": "/epms-f/wayline_files/公司楼顶交通巡检演示.wpml"
            },
            {
              "url": "/epms-f/wayline_files/公司楼顶交通巡检演示2.kmz",
              "name": "公司楼顶交通巡检演示2.kmz",
              "wpml_url": "/epms-f/wayline_files/公司楼顶交通巡检演示.wpml"
            },
            {
              "url": "/epms-f/wayline_files/公司楼顶交通巡检演示3.kmz",
              "name": "公司楼顶交通巡检演示3.kmz",
              "wpml_url": "/epms-f/wayline_files/公司楼顶交通巡检演示.wpml"
            }
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
    getFixedType(str) {
      if (!str) return "info"
      // 手动强制映射，优先级最高
      // 自定义映射：key=type，value=匹配该类型的文字数组
      const specialMap = {
        danger: ["隐藏", "已隐藏", "已关闭", "已停用", "停用"],
        success: ["公开", "已公开", "启用", "已启用", "通过", "已通过"],
        warning: ["待审核", "审核中"],
        primary: ["完成", "已完成"],
        info: []
      };

      // 第一步：遍历匹配自定义关键词，命中直接返回对应type
      for (const [type, keywordArr] of Object.entries(specialMap)) {
        if (keywordArr.includes(str)) {
          return type;
        }
      }

      // 第二步：无匹配则用FNV哈希稳定分配，降低中文碰撞
      const typeList = ["primary", "success", "info", "warning", "danger"];
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash;
      }
      const index = Math.abs(hash) % typeList.length;
      return typeList[index];
    },
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
    isDisabled(row, index, btnConfig) {
      if (!btnConfig.isDisableButton) return false
      const customFn = new Function('row', 'rowIndex', 'btnConfig', btnConfig.isDisableButton)
      return customFn.call(this, row, index, btnConfig)
    },
    isHidden(row, index, btnConfig) {
      if (!btnConfig.isHiddenButton) return false
      const customFn = new Function('row', 'rowIndex', 'btnConfig', btnConfig.isHiddenButton)
      return customFn.call(this, row, index, btnConfig)
    },
    stringFormatter(row, expr) {
      if (!expr) return ''
      try {
        // 把row作为上下文，执行表达式
        const fn = new Function('row', `
      try {
        with(row) {
          return (${expr})
        }
      } catch(err) {
        return null
      }
    `)
        const val = fn(row)
        return val ?? '--'
      } catch (e) {
        return '--'
      }
    }
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

/* 自定义纵向间隔容器 */
.flex-col-gap {
  display: flex;
  flex-direction: column;
  /* 你原来mb-16对应 16px 间距，这里设16px */
  gap: 16px;
}

.flex-row-gap {
  display: flex;
  flex-direction: row;
  /* 你原来mb-16对应 16px 间距，这里设16px */
  gap: 8px;
}

.svg-wrap {
  width: 23px;
  height: 23px;

  svg {
    /* 强制svg占满父容器，覆盖svg自身写死的宽高 */
    width: 100% !important;
    height: 100% !important;
    display: block;
    /* 等比居中，防止拉伸变形 */
    object-fit: contain;
  }
}
</style>
