export const mySchema = {
    type: 'location-picker',
    icon: 'map',
    formItemFlag: true,
    options: {
        name: '',
        label: '地点',
        mapKey: '',
        labelAlign: '',
        defaultValue: '',
        placeholder: '请从地图上选择',
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: '',
        // -------------------
        customClass: '', // 自定义css类名
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        // -------------------
        onCreated: '',
        onMounted: '',
    }
}
