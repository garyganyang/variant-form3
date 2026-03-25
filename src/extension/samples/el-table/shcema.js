export const mySchema = {
    type: 'el-table',
    icon: 'el-table',
    formItemFlag: false,
    options: {
        name: '',
        border: true,
        tableHeight: '',
        // defaultValue: '',
        // placeholder: '请从地图上选择',
        // labelWidth: null,
        // labelHidden: false,
        // disabled: false,
        // hidden: false,
        // required: false,
        // requiredHint: '',
        // -------------------
        customClass: '', // 自定义css类名
        // labelIconClass: null,
        // labelIconPosition: 'rear',
        // labelTooltip: null,
        columnList: [],
        actionList: [],
        actionColumnFixedWidth: '120', // 操作列固定宽度
        // -------------------
        onCreated: '',
        onMounted: '',
        onHeaderClick: '',
        onRowClick: '',
        onRowDoubleClick: '',
        onCellClick: '',
        onCellDoubleClick: '',
        onPageSizeChange: '',
        onPageNumChange: '',
    }
}
