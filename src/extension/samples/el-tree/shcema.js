export const mySchema = {
    type: 'el-tree',
    icon: 'el-tree',
    formItemFlag: true,
    options: {
        name: '',
        label: 'el-tree',
        labelAlign: '',
        // defaultValue: [],
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: '',
        elTree_props_str: '{"children":"children","label":"label"}',
        elTree_props: {"children": "children", "label": "label"},
        elTree_node_key: 'id', // 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的
        elTree_empty_text: '暂无数据',
        elTree_render_after_expand: true, // 是否在第一次展开某个树节点后才渲染其子节点
        elTree_highlight_current: false, // 是否高亮当前选中节点，默认值是 false。
        elTree_default_expand_all: false, // 是否默认展开所有节点。
        elTree_expand_on_click_node: true, // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。。
        elTree_show_checkbox: false, //节点是否可被选择
        elTree_accordion: false, //是否每次只打开一个同级树节点展开
        elTree_indent: 18, //相邻级节点间的水平缩进，单位为像素
        // elTree_icon: '', // 自定义树节点图标组件
        elTree_draggable: false, //是否开启拖拽节点功能

        // -------------------
        customClass: '', // 自定义css类名
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        // -------------------
        onCreated: '',
        onMounted: "this.setValue([\r\n  {\r\n    label: 'Level one 1',\r\n    children: [\r\n      {\r\n        label: 'Level two 1-1',\r\n        children: [\r\n          {\r\n            label: 'Level three 1-1-1',\r\n          },\r\n        ],\r\n      },\r\n    ],\r\n  },\r\n  {\r\n    label: 'Level one 2',\r\n    children: [\r\n      {\r\n        label: 'Level two 2-1',\r\n        children: [\r\n          {\r\n            label: 'Level three 2-1-1',\r\n          },\r\n        ],\r\n      },\r\n      {\r\n        label: 'Level two 2-2',\r\n        children: [\r\n          {\r\n            label: 'Level three 2-2-1',\r\n          },\r\n        ],\r\n      },\r\n    ],\r\n  },\r\n  {\r\n    label: 'Level one 3',\r\n    children: [\r\n      {\r\n        label: 'Level two 3-1',\r\n        children: [\r\n          {\r\n            label: 'Level three 3-1-1',\r\n          },\r\n        ],\r\n      },\r\n      {\r\n        label: 'Level two 3-2',\r\n        children: [\r\n          {\r\n            label: 'Level three 3-2-1',\r\n          },\r\n        ],\r\n      },\r\n    ],\r\n  },\r\n])",
        elTree_onNodeClick: '',
    }
}
