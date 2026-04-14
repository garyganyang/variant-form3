import {addCustomWidgetSchema} from "@/components/form-designer/widget-panel/widgetsConfig";
import * as PERegister from "@/components/form-designer/setting-panel/propertyRegister";
import * as PEFactory from "@/components/form-designer/setting-panel/property-editor-factory.jsx";
import {mySchema} from "./shcema";
import MyWidget from "./ace-editor-widget.vue";
// import {registerFWGenerator} from "@/utils/sfc-generator";
// import {alertTemplateGenerator} from "@/extension/samples/extension-sfc-generator";

export const loadAceEditorWidget = (app) => {
    /**
     * 加载字段组件步骤：
     * 1. 加载组件Json Schema;
     * 2. 全局注册字段组件，字段组件设计期和运行期共用，故仅需注册一个组件；
     * 3. 全局注册属性编辑器组件（基本属性、高级属性、事件属性）；
     * 4. 注册字段组件的代码生成器；
     * 5. 加载完毕。
     */

    addCustomWidgetSchema(mySchema)  //加载组件Json Schema
    /* -------------------------------------------------- */
    app.component(MyWidget.name, MyWidget)  //注册组件
    /* -------------------------------------------------- */
    // PERegister.registerCPEditor(app, 'tianditu-title', 'tianditu-title-editor',
    //     PEFactory.createInputTextEditor('title', 'extension.setting.tiandituTitle'))

    // let typeOptions = [
    //     {label: 'success', value: 'success'},
    //     {label: 'warning', value: 'warning'},
    //     {label: 'info', value: 'info'},
    //     {label: 'error', value: 'error'},
    // ]
    // // PERegister.registerCPEditor(app, 'alert-type', 'alert-type-editor',
    // //     PEFactory.createSelectEditor('type', 'extension.setting.alertType',
    // //         {optionItems: typeOptions}))
    // /* type属性映射已存在，无须再注册，故只需注册属性编辑器即可！！ */
    // app.component('alert-type-editor',
    //     PEFactory.createSelectEditor('type', 'extension.setting.alertType',
    //         {optionItems: typeOptions}))
    //
    PERegister.registerCPEditor(app, 'aceEditorFontSize', 'aceEditorFontSize-editor',
        PEFactory.createInputTextEditor('aceEditorFontSize', 'extension.setting.aceEditorFontSize', '编辑器字体大小(px)', true))

    const langOptions = [
        {label: 'JSON', value: 'json'},
        {label: 'XML', value: 'xml'},
        {label: 'Javascript', value: 'javascript'},
        {label: 'Html', value: 'html'},
        {label: 'SQL', value: 'sql'},
        {label: 'Yaml', value: 'yaml'},
    ]
    PERegister.registerCPEditor(app, 'aceEditorLang', 'aceEditorLang-editor',
        PEFactory.createSelectEditor('aceEditorLang', 'extension.setting.aceEditorLang', {optionItems: langOptions}, '代码语言', true))

    const themeOptions = [
        {label: 'light_Chrome', value: 'chrome'},
        {label: 'light_Github', value: 'github'},
        {label: 'light_Dawn', value: 'dawn'},
        {label: 'light_XCode', value: 'xcode'},
        {label: 'dark_github', value: 'github_dark'},
        {label: 'dark_Dracula', value: 'dracula'},
        {label: 'dark_Monokai', value: 'monokai'},
    ]
    PERegister.registerCPEditor(app, 'aceEditorTheme', 'aceEditorTheme-editor',
        PEFactory.createSelectEditor('aceEditorTheme', 'extension.setting.aceEditorTheme', {optionItems: themeOptions}, '编辑器主题色', true))


    // PERegister.registerCPEditor(app, 'alert-closable', 'alert-closable-editor',
    //     PEFactory.createBooleanEditor('closable', 'extension.setting.closable'))
    //
    // PERegister.registerCPEditor(app, 'alert-closeText', 'alert-closeText-editor',
    //     PEFactory.createInputTextEditor('closeText', 'extension.setting.closeText'))
    //
    // PERegister.registerCPEditor(app, 'alert-center', 'alert-center-editor',
    //     PEFactory.createBooleanEditor('center', 'extension.setting.center'))
    //
    // PERegister.registerCPEditor(app, 'alert-showIcon', 'alert-showIcon-editor',
    //     PEFactory.createBooleanEditor('showIcon', 'extension.setting.showIcon'))
    //
    // let effectOptions = [
    //     {label: 'light', value: 'light'},
    //     {label: 'dark', value: 'dark'},
    // ]
    // PERegister.registerCPEditor(app, 'alert-effect', 'alert-effect-editor',
    //     PEFactory.createRadioButtonGroupEditor('effect', 'extension.setting.effect',
    //         {optionItems: effectOptions}))
    //
    // PERegister.registerEPEditor(app, 'alert-onClose', 'alert-onClose-editor',
    //     PEFactory.createEventHandlerEditor('onClose', []))

    /* -------------------------------------------------- */
    // registerFWGenerator('alert', alertTemplateGenerator)  //注册字段组件的代码生成器
    /* -------------------------------------------------- */
    /* 字段组件加载完毕 end */
}
