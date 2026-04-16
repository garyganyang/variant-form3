<template>
  <form-item-wrapper :designer="designer" :field="field" :rules="rules" :design-state="designState"
                     :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                     :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
    <el-statistic :value="outputValue"
                  :title="field.options.elStatistic_title"
                  :prefix="field.options.elStatistic_prefix"
                  :suffix="field.options.elStatistic_suffix"
                  :precision="field.options.elStatistic_precision"
    />
  </form-item-wrapper>
</template>
<script>
import FormItemWrapper from '@/components/form-designer/form-widget/field-widget/form-item-wrapper'
import emitter from '@/utils/emitter'
import i18n, {translate} from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";
import {useTransition} from '@vueuse/core'
import {ref} from "vue";

export default {
  name: "el-statistic-widget",
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
    // "field.options.elStatistic_props_str": {
    // "fieldModel": {
    //   handler(val) {
    //         try {
    //           JSON.parse(val);
    //           this.field.options.elStatistic_props = JSON.parse(val);
    //         } catch (e) {
    //           alert(val + ' is not json serializable')
    //         }
    //   },
    //   deep: true,  // 必须加！因为是对象内部属性
    //   immediate: true // 要不要一开始就执行一次
    // }
  },
  // ======================================
  // 👇 加一个 setup 函数！！！（关键） 才能让useTransition起效, useTransition 是 Composition API 函数
  // ======================================
  setup(props) {
    // 定义动画源
    const fieldModel = ref(0)
    // 定义过渡值
    const outputValue = useTransition(fieldModel, {
      duration: 1500,
    })
    // 暴露给模板和this使用
    return {
      fieldModel,
      outputValue
    }
  },
  data() {
    return {
      // 👇 这里删掉 outputValue，不要定义！
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
