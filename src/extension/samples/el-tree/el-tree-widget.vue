<template>
  <form-item-wrapper :designer="designer" :field="field" :rules="rules" :design-state="designState"
                     :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                     :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
    <el-tree :data="fieldModel"
             :props="field.options.elTree_props"
             :node-key="field.options.elTree_node_key"
             :empty-text="field.options.elTree_empty_text"
             :render-after-expand="field.options.elTree_render_after_expand"
             :highlight-current="field.options.elTree_highlight_current"
             :default-expand-all="field.options.elTree_default_expand_all"
             :expand-on-click-node="field.options.elTree_expand_on_click_node"
             :show-checkbox="field.options.elTree_show_checkbox"
             :accordion="field.options.elTree_accordion"
             :indent="field.options.elTree_indent"
             :icon="field.options.elTree_icon"
             :draggable="field.options.elTree_draggable"
             style="width: 100%"
             @node-click="onNodeClick"
    />
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from '@/components/form-designer/form-widget/field-widget/form-item-wrapper'
import emitter from '@/utils/emitter'
import i18n, {translate} from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";

export default {
  name: "el-tree-widget",
  componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  components: {FormItemWrapper},
  props: {
    field: Object,
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
  watch: {
    // 深度监听 field 里的 options.disabled
    "field.options.elTree_props_str": {
      handler(val) {
        try {
          JSON.parse(val);
          this.field.options.elTree_props = JSON.parse(val);
        } catch (e) {
          alert(val + ' is not json serializable')
        }
      },
      deep: true,  // 必须加！因为是对象内部属性
      immediate: false // 要不要一开始就执行一次
    }
  },
  data() {
    return {
      fieldModel: [],
      rules: [],
    }
  },
  computed: {},
  beforeCreate() {
    /* 这里不能访问方法和属性！！ */
  },
  created() {
    /* 注意：子组件mounted在父组件created之后、父组件mounted之前触发，故子组件mounted需要用到的prop
       需要在父组件created中初始化！！ */
    this.initFieldModel()
    this.registerToRefList()
    this.initEventHandler()
    this.buildFieldRules()

    this.handleOnCreated()
  },
  mounted() {
    this.handleOnMounted()
  },
  beforeUnmount() {
    this.unregisterFromRefList()
  },
  methods: {
    handleChangeEvent() {
      this.syncUpdateFormModel(this.fieldModel)
    },
    onNodeClick(node) {
      if (this.field.options.elTree_onNodeClick) {
        const customFn = new Function('node', )
        return customFn.call(this, node)
      }
    },
  }
}
</script>

<style scoped>
.full-screen {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
}

.full-screen > .full-screen-icon {
  z-index: 121;
}

.v-ace-editor {
  height: 100%;;
}

.full-screen .v-ace-editor {
  height: 100vh;
}
</style>
