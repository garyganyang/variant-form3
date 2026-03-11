import {addCustomWidgetSchema} from "@/components/form-designer/widget-panel/widgetsConfig";
import {mySchema} from "@/extension/samples/location-picker/shcema";
import MyWidget from "@/extension/samples/location-picker/location-picker-widget.vue";
import * as PERegister from "@/components/form-designer/setting-panel/propertyRegister";
import * as PEFactory from "@/components/form-designer/setting-panel/property-editor-factory.jsx";
// import {registerFWGenerator} from "@/utils/sfc-generator";
// import {alertTemplateGenerator} from "@/extension/samples/extension-sfc-generator";

export const loadLocationPickerWidget = (app) => {
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
    // PERegister.registerCPEditor(app, 'alert-description', 'alert-description-editor',
    //     PEFactory.createInputTextEditor('description', 'extension.setting.description'))
    //
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
