<template>
  <form-item-wrapper :designer="designer" :field="field" :rules="rules" :design-state="designState"
                     :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                     :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
    <!--    <el-switch ref="fieldEditor" v-model="fieldModel"-->
    <!--               :disabled="field.options.disabled"-->
    <!--               :active-text="field.options.activeText" :inactive-text="field.options.inactiveText"-->
    <!--               :active-color="field.options.activeColor" :inactive-color="field.options.inactiveColor"-->
    <!--               :width="field.options.switchWidth">-->
    <!--    </el-switch>-->
    <el-input v-model="fieldModel.address"
              :disabled="true"
              :placeholder="field.options.placeholder"
              class="input-with-select"
    >
      <!--      :disabled="field.options.disabled"-->
      <template #append>
        <el-button :icon="Search" :disabled="field.options.disabled" @click="openTheDialog()"/>
      </template>
    </el-input>
    <map-dialog ref="mapDialogRef" tdt-key="b67f3a716250c0feb8b4677a4454a20e" @on-confirm="onMapConfirm"/>
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from '@/components/form-designer/form-widget/field-widget/form-item-wrapper'
import emitter from '@/utils/emitter'
import i18n, {translate} from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";
import {Search} from "@element-plus/icons-vue";
import MapDialog from "./map-dialog.vue"

export default {
  name: "location-picker-widget",
  componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
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
  components: {
    MapDialog,
    FormItemWrapper,
  },
  data() {
    return {
      oldFieldValue: null, //field组件change之前的值
      fieldModel: {},
      rules: [],
    }
  },
  computed: {
    Search() {
      return Search
    }
  },
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
    openTheDialog() {
      this.$refs.mapDialogRef.show(this.fieldModel)
    },
    onMapConfirm(data) {
      this.fieldModel = data
    }
  }
}
</script>

<style lang="scss" scoped>
//@import "../../../../styles/global.scss"; /* form-item-wrapper已引入，还需要重复引入吗？ */
//
//.full-width-input {
//  width: 100% !important;
//}
:deep(.el-input.is-disabled .el-input__wrapper){
  background-color: inherit;
  box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;
}
</style>
