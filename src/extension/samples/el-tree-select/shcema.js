export const mySchema = {
    type: 'el-tree-select',
    icon: 'el-tree-select',
    formItemFlag: true,
    options: {
        name: '',
        label: 'el-tree',
        labelAlign: '',
        defaultValue: '1-1-1',
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: '',
        elTreeSelect_props_str: '{"children":"children","label":"label","value":"value"}',
        elTreeSelect_props: {"children": "children", "label": "label", "value": "value"},
        elTreeSelect_data: [], // 数据
        elTreeSelect_node_key: 'id', // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
        elTreeSelect_empty_text: '暂无数据',
        elTreeSelect_render_after_expand: true, // 是否在第一次展开某个树节点后才渲染其子节点
        elTreeSelect_highlight_current: false, // 是否高亮当前选中节点，默认值是 false。
        elTreeSelect_default_expand_all: false, // 是否默认展开所有节点。
        elTreeSelect_expand_on_click_node: true, // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。。
        elTreeSelect_show_checkbox: false, //节点是否可被选择
        elTreeSelect_accordion: false, //是否每次只打开一个同级树节点展开
        elTreeSelect_indent: 18, //相邻级节点间的水平缩进，单位为像素
        elTreeSelect_multiple: false, // 通过点击或复选框选择多个选项。
        elTreeSelect_check_strictly: false, // 当属性 check-strictly=true 时，任何节点都可以被选择，否则只有子节点可被选择。
        // -------------------
        customClass: '', // 自定义css类名
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        // -------------------
        onCreated: '',
        "onMounted": "// 这是设置下拉列表的例子\r\nthis.field.options.elTreeSelect_data = [{\"id\":1,\"value\":\"1\",\"label\":\"Level one 1\",\"children\":[{\"id\":2,\"value\":\"1-1\",\"label\":\"Level two 1-1\",\"children\":[{\"id\":3,\"value\":\"1-1-1\",\"label\":\"Level three 1-1-1\"}]}]},{\"id\":4,\"value\":\"2\",\"label\":\"Level one 2\",\"children\":[{\"id\":5,\"value\":\"2-1\",\"label\":\"Level two 2-1\",\"children\":[{\"id\":6,\"value\":\"2-1-1\",\"label\":\"Level three 2-1-1\"}]},{\"id\":7,\"value\":\"2-2\",\"label\":\"Level two 2-2\",\"children\":[{\"id\":8,\"value\":\"2-2-1\",\"label\":\"Level three 2-2-1\"}]}]},{\"id\":9,\"value\":\"3\",\"label\":\"Level one 3\",\"children\":[{\"id\":10,\"value\":\"3-1\",\"label\":\"Level two 3-1\",\"children\":[{\"id\":11,\"value\":\"3-1-1\",\"label\":\"Level three 3-1-1\"}]},{\"id\":12,\"value\":\"3-2\",\"label\":\"Level two 3-2\",\"children\":[{\"id\":13,\"value\":\"3-2-1\",\"label\":\"Level three 3-2-1\"}]}]}]"
    }
}
