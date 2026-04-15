import {addCustomWidgetSchema} from "@/components/form-designer/widget-panel/widgetsConfig";
import * as PERegister from "@/components/form-designer/setting-panel/propertyRegister";
import * as PEFactory from "@/components/form-designer/setting-panel/property-editor-factory.jsx";
import {mySchema} from "./shcema";
import MyWidget from "./el-tree-widget.vue";
import {createInputNumberEditor} from "@/components/form-designer/setting-panel/property-editor-factory.jsx";
// import {registerFWGenerator} from "@/utils/sfc-generator";
// import {alertTemplateGenerator} from "@/extension/samples/extension-sfc-generator";

export const loadElTreeWidget = (app) => {
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

    //     : 18, //相邻级节点间的水平缩进，单位为像素

    PERegister.registerCPEditor(app, 'elTree_props_str', 'elTree_props_str-editor',
        PEFactory.createInputTextEditor('elTree_props_str', 'extension.setting.elTree_props_str', '配置选项，具体见Tree API', false))

    PERegister.registerCPEditor(app, 'elTree_node_key', 'elTree_node_key-editor',
        PEFactory.createInputTextEditor('elTree_node_key', 'extension.setting.elTree_node_key', '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的', false))

    PERegister.registerCPEditor(app, 'elTree_empty_text', 'elTree_empty_text-editor',
        PEFactory.createInputTextEditor('elTree_empty_text', 'extension.setting.elTree_empty_text', '内容为空的时候展示的文本', false))

    PERegister.registerCPEditor(app, 'elTree_render_after_expand', 'elTree_render_after_expand-editor',
        PEFactory.createBooleanEditor('elTree_render_after_expand', 'extension.setting.elTree_render_after_expand'))

    PERegister.registerCPEditor(app, 'elTree_highlight_current', 'elTree_highlight_current-editor',
        PEFactory.createBooleanEditor('elTree_highlight_current', 'extension.setting.elTree_highlight_current'))

    PERegister.registerCPEditor(app, 'elTree_default_expand_all', 'elTree_default_expand_all-editor',
        PEFactory.createBooleanEditor('elTree_default_expand_all', 'extension.setting.elTree_default_expand_all'))

    PERegister.registerCPEditor(app, 'elTree_expand_on_click_node', 'elTree_expand_on_click_node-editor',
        PEFactory.createBooleanEditor('elTree_expand_on_click_node', 'extension.setting.elTree_expand_on_click_node'))

    PERegister.registerCPEditor(app, 'elTree_show_checkbox', 'elTree_show_checkbox-editor',
        PEFactory.createBooleanEditor('elTree_show_checkbox', 'extension.setting.elTree_show_checkbox'))

    PERegister.registerCPEditor(app, 'elTree_accordion', 'elTree_accordion-editor',
        PEFactory.createBooleanEditor('elTree_accordion', 'extension.setting.elTree_accordion'))

    PERegister.registerCPEditor(app, 'elTree_draggable', 'elTree_draggable-editor',
        PEFactory.createBooleanEditor('elTree_draggable', 'extension.setting.elTree_draggable'))

    PERegister.registerCPEditor(app, 'elTree_indent', 'elTree_indent-editor',
        PEFactory.createInputNumberEditor('elTree_indent', 'extension.setting.elTree_indent'))

    const iconOptions = [
        {label: 'Folder', value: 'Folder'},
    ]
    PERegister.registerCPEditor(app, 'elTree_icon', 'elTree_icon-editor',
        PEFactory.createSelectEditor('elTree_icon', 'extension.setting.elTree_icon', {optionItems: iconOptions}, '自定义树节点图标组件', false))

   //
    // let effectOptions = [
    //     {label: 'light', value: 'light'},
    //     {label: 'dark', value: 'dark'},
    // ]
    // PERegister.registerCPEditor(app, 'alert-effect', 'alert-effect-editor',
    //     PEFactory.createRadioButtonGroupEditor('effect', 'extension.setting.effect',
    //         {optionItems: effectOptions}))

    PERegister.registerEPEditor(app, 'elTree_onNodeClick', 'elTree_onNodeClick-editor',
        PEFactory.createEventHandlerEditor('onNodeClick', ["node"]))

    /* -------------------------------------------------- */
    // registerFWGenerator('alert', alertTemplateGenerator)  //注册字段组件的代码生成器
    /* -------------------------------------------------- */
    /* 字段组件加载完毕 end */
}
