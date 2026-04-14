<template>
  <form-item-wrapper :designer="designer" :field="field" :rules="rules" :design-state="designState"
                     :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                     :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">

    <div class="border w-full" style="height: 180px">
      <div class="" :class="fullScreen ? 'full-screen' : 'relative'" style="height: 180px">
        <!-- 用 flex 容器包裹 icon 和 switch，实现整体靠右 -->
        <div class="absolute top-2 right-3 flex items-center gap-4" style="z-index:50">
          <!-- 全屏图标 -->
          <el-icon :size="28" class="cursor-pointer" @click="resizeScreen">
            <FullScreen/>
          </el-icon>
          <!-- 编辑开关 -->
          <!--        <el-switch v-if="field.options.disableEditSwitch"-->
          <!--                   v-model="editable"-->
          <!--                   size="large"-->
          <!--                   active-text="可编辑"-->
          <!--                   @change="field.options.disabled = !field.options.disabled"/>-->
        </div>
        <v-ace-editor v-model:value="fieldModel"
                      :readonly="field.options.disabled"
                      :printMargin="120"
                      :lang="field.options.aceEditorLang"
                      :theme="field.options.aceEditorTheme"
                      class="v-ace-editor"
                      :style="{
                    'font-size': `${field.options.aceEditorFontSize}px`, // 字体大小（模板字符串）
                  }"
                      @init="handleEditorInit"
                      @blur="handleChangeEvent"/>
      </div>
    </div>
  </form-item-wrapper>
</template>

<script>
import FormItemWrapper from '@/components/form-designer/form-widget/field-widget/form-item-wrapper'
import emitter from '@/utils/emitter'
import i18n, {translate} from "@/utils/i18n";
import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin";
import {FullScreen} from "@element-plus/icons-vue";
import {VAceEditor} from 'vue3-ace-editor';
import 'ace-builds/src-noconflict/mode-xml'; // Load the language definition file used below
import 'ace-builds/src-noconflict/mode-html'; // Load the language definition file used below
import 'ace-builds/src-noconflict/mode-java'; // Load the language definition file used below
import 'ace-builds/src-noconflict/mode-javascript'; // Load the language definition file used below
import 'ace-builds/src-noconflict/mode-json'; // Load the language definition file used below
import 'ace-builds/src-noconflict/mode-sql'; // Load the language definition file used below
import 'ace-builds/src-noconflict/mode-yaml'; // Load the language definition file used below
import 'ace-builds/src-noconflict/theme-chrome';
import 'ace-builds/src-noconflict/theme-dawn';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-github_dark';
import 'ace-builds/src-noconflict/theme-dracula';
import 'ace-builds/src-noconflict/theme-monokai';

export default {
  name: "ace-editor-widget",
  componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
  mixins: [emitter, fieldMixin, i18n],
  components: {FullScreen, FormItemWrapper, VAceEditor},
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
  // watch: {
  //   // 深度监听 field 里的 options.disabled
  //   "field.options.disabled": {
  //     handler(val) {
  //       this.editable = !val;
  //       // 你要做的逻辑
  //     },
  //     deep: true,  // 必须加！因为是对象内部属性
  //     immediate: false // 要不要一开始就执行一次
  //   }
  // },
  data() {
    return {
      oldFieldValue: null, //field组件change之前的值
      fullScreen: false,
      editable: true,
      fieldModel: {},
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
    resizeScreen() {
      this.fullScreen = !this.fullScreen
    },
    handleEditorInit(editor) {
      // 可选：开启 JS 代码补全/提示
      // if (props.lang === "javascript") {
      //   console.log(props.lang)
      //   editor.setOptions({
      //     enableBasicAutocompletion: true, // 基础自动补全
      //     enableLiveAutocompletion: true,  // 实时自动补全
      //     enableSnippets: true             // 启用 JS 代码片段
      //   })
      //   // 可选：设置 JS 语法检测（需额外安装 eslint 插件）
      //   // editor.session.setMode("ace/mode/javascript");
      // }
    },
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
