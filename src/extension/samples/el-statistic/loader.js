import {addCustomWidgetSchema} from "@/components/form-designer/widget-panel/widgetsConfig";
import * as PERegister from "@/components/form-designer/setting-panel/propertyRegister";
import * as PEFactory from "@/components/form-designer/setting-panel/property-editor-factory.jsx";
import {mySchema} from "./shcema";
import MyWidget from "./el-statistic-widget.vue";
import {createInputNumberEditor} from "@/components/form-designer/setting-panel/property-editor-factory.jsx";
// import {registerFWGenerator} from "@/utils/sfc-generator";
// import {alertTemplateGenerator} from "@/extension/samples/extension-sfc-generator";

export const loadElStatisticWidget = (app) => {
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


    PERegister.registerCPEditor(app, 'elStatistic_title', 'elStatistic_title-editor',
        PEFactory.createInputTextEditor('elStatistic_title', 'extension.setting.elStatistic_title', '数字标题', false))

    PERegister.registerCPEditor(app, 'elStatistic_prefix', 'elStatistic_prefix-editor',
        PEFactory.createInputTextEditor('elStatistic_prefix', 'extension.setting.elStatistic_prefix', '设置数字的前缀', false))

    PERegister.registerCPEditor(app, 'elStatistic_suffix', 'elStatistic_suffix-editor',
        PEFactory.createInputTextEditor('elStatistic_suffix', 'extension.setting.elStatistic_suffix', '设置数字的后缀', false))

    PERegister.registerCPEditor(app, 'elStatistic_precision', 'elStatistic_precision-editor',
        PEFactory.createInputNumberEditor('elStatistic_precision', 'extension.setting.elStatistic_precision'))

    //
    // let effectOptions = [
    //     {label: 'light', value: 'light'},
    //     {label: 'dark', value: 'dark'},
    // ]
    // PERegister.registerCPEditor(app, 'alert-effect', 'alert-effect-editor',
    //     PEFactory.createRadioButtonGroupEditor('effect', 'extension.setting.effect',
    //         {optionItems: effectOptions}))

    // PERegister.registerEPEditor(app, 'elTreeSelect_onNodeClick', 'elTreeSelect_onNodeClick-editor',
    //     PEFactory.createEventHandlerEditor('onNodeClick', ["node"]))

    /* -------------------------------------------------- */
    // registerFWGenerator('alert', alertTemplateGenerator)  //注册字段组件的代码生成器
    /* -------------------------------------------------- */
    /* 字段组件加载完毕 end */
}
