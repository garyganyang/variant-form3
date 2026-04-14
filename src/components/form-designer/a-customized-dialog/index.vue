<template>
  <div v-drag="['.customized-drag-dialog.el-dialog', '.customized-drag-dialog .el-dialog__header']" class="aaa">
    <el-dialog v-model="dialogVisible"
               class="customized-drag-dialog small-padding-dialog"
               :show-close="false"
               :fullscreen="dialogOptions.isFullscreen"
               :close-on-click-modal="false"
               :close-on-press-escape="false"
               :width="dialogOptions.dialogWidth"
               :destroy-on-close="true"
               :append-to-body="true">
      <!--      header-class="border-b"-->
      <!--      body-class="px-0 pt-4"-->
      <!--      footer-class="border-t"-->
      <!-- 👇 自定义头部区域 -->
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header flex">
          <div :id="titleId" :class="titleClass" class="flex-1">{{ dialogOptions.title }}</div>
          <el-button link @click="toggleFullscreen">
            <el-icon :size="16">
              <FullScreen/>
            </el-icon>
          </el-button>
          <el-button link @click="close">
            <el-icon :size="16">
              <Close/>
            </el-icon>
          </el-button>
        </div>
      </template>
      <!--      <component :is="asyncVFormRender"-->
      <!--                 ref="dialogFormRenderRef"-->
      <!--                 @hiddenCustomerDialog="hiddenCustomerDialog"-->
      <!--      />-->
      <v-form-render ref="dialogFormRenderRef"
                     v-if="dialogVisible"
                     :form-json="{}"
                     @hideDialog="hideDialog"/>
    </el-dialog>

    <!--      <el-form ref="dialogFormRef" label-width="auto" style="">-->
    <!--        <el-form-item label="名称: " prop="name">-->
    <!--          <el-input clearable placeholder="请输入key"/>-->
    <!--        </el-form-item>-->
    <!--        &lt;!&ndash;          <v-form-render ref="dialogFormRenderRef" :parentFormRef="parentFormRef" @hiddenCustomerDialog="hiddenCustomerDialog"/>&ndash;&gt;-->
    <!--      </el-form>-->

  </div>
</template>

<script>
// import emitter from '@/vform/utils/emitter'
// import fieldMixin from '@/vform/components/form-designer/form-widget/field-widget/fieldMixin'

import emitter from "@/utils/emitter";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";
import i18n from "@/utils/i18n";
import {Close, FullScreen} from "@element-plus/icons-vue";
import {defineAsyncComponent} from "vue";
// import VFormRender from "@/components/form-render/index.vue";

export default {
  name: 'customized-dialog',
  components: {
    Close, FullScreen,
    // 选项式API 标准异步组件写法，不会提前初始化、不会被响应式包裹
    VFormRender: defineAsyncComponent(() =>
        import('@/components/form-render/index.vue') // 按你实际路径改
    )
  },
  // mixins: [emitter, fieldMixin],
  mixins: [emitter, fieldMixin, i18n],
  data() {
    return {
      dialogVisible: false,
      dialogOptions: {
        title: '',
        isFullscreen: false,
        hasFullscreenBtn: false,
        dialogHeight: '500px',
        dialogWidth: '1250px',
      },
      dialogFormData: {},
      dialogFormSchema: {},
      callbackFn: null,
      parentFormRef: {},
      asyncVFormRender: null
    }
  },
  mounted() {
  },
  watch: {
    // 监听弹窗状态
    dialogVisible(newVal) {
      if (newVal === true) {
        // 弹窗打开 → 等DOM+异步组件加载, 不得已才这么做
        this.$nextTick(() => {
          // 加100ms延时，适配异步组件加载
          setTimeout(() => {
            const formRender = this.$refs.dialogFormRenderRef;
            if (formRender) {
              formRender.setFormJson(this.dialogFormSchema);
              formRender.setFormData(this.dialogFormData);
            }
          }, 100);
        })
      }
    }
  },
  methods: {
    // 切换全屏
    toggleFullscreen() {
      this.dialogOptions.isFullscreen = !this.dialogOptions.isFullscreen
    },
    showDialog(dialogOptions = {}, dialogFormSchema = {}, dialogFormData = {}, callbackFn, parentFormRef) {
      this.callbackFn = callbackFn
      this.parentFormRef = parentFormRef
      const {title, isFullscreen, hasFullscreenBtn, dialogWidth, dialogHeight} = dialogOptions
      this.dialogOptions.title = title
      this.dialogOptions.dialogHeight = dialogHeight && dialogHeight.length ? dialogHeight : this.dialogOptions.dialogHeight
      this.dialogOptions.dialogWidth = dialogWidth && dialogWidth.length ? dialogWidth : this.dialogOptions.dialogWidth
      this.dialogOptions.isFullscreen = isFullscreen
      this.dialogOptions.hasFullscreenBtn = hasFullscreenBtn

      this.dialogFormData = dialogFormData
      this.dialogFormSchema = dialogFormSchema

      this.dialogVisible = true
    },
    hideDialog(params, callbackFn, extraData) {
      if (callbackFn) {
        const remoteFn = new Function(callbackFn)
        remoteFn.call(this)
      }
      if (this.callbackFn) {
        const remoteFn2 = new Function('extraData', this.callbackFn)
        remoteFn2.call(this, extraData)
      }
      this.dialogFormData = {}
      this.dialogVisible = false
    },
    // getOneFormDataByCode(code) {
    //   const params = {
    //     params: {
    //       tableCode: code,
    //     },
    //   }
    //   return new Promise((resolve, reject) => {
    //     this.$apiServe.getFormList(params).then((res) => {
    //       console.log(res.data)
    //       if (res.data.data.content.length) {
    //         resolve(res.data.data.content[0])
    //       } else {
    //         this.$message.error('未查询到相关视图')
    //         reject()
    //       }
    //     }).catch(err => {
    //       reject(err)
    //     })
    //   })
    // },
  },
}
</script>

<style scoped>
</style>
