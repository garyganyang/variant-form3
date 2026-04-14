export const formTemplates = [
    {
        title: "增删改查(带表格/带弹框调用)",
        metadata: {
            "widgetList": [
                {
                    "id": "grid34227", "key": 20082, "cols": [
                        {
                            "id": "grid-col-21186",
                            "icon": "grid-col",
                            "type": "grid-col",
                            "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol21186", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                            "category": "container",
                            "internal": true,
                            "widgetList": [{
                                "id": "input14716",
                                "key": 47975,
                                "icon": "text-field",
                                "type": "input",
                                "options": {
                                    "name": "user_name_like",
                                    "size": "",
                                    "type": "text",
                                    "label": "巡店人",
                                    "hidden": false,
                                    "onBlur": "",
                                    "onFocus": "",
                                    "onInput": "",
                                    "disabled": false,
                                    "onChange": "",
                                    "readonly": false,
                                    "required": false,
                                    "clearable": true,
                                    "maxLength": null,
                                    "minLength": null,
                                    "onCreated": "",
                                    "onMounted": "",
                                    "buttonIcon": "custom-search",
                                    "labelAlign": "",
                                    "labelWidth": "60",
                                    "onValidate": "",
                                    "prefixIcon": "",
                                    "suffixIcon": "",
                                    "validation": "",
                                    "columnWidth": "200px",
                                    "customClass": "",
                                    "labelHidden": false,
                                    "placeholder": "请输入",
                                    "appendButton": false,
                                    "defaultValue": "",
                                    "labelTooltip": null,
                                    "requiredHint": "",
                                    "showPassword": false,
                                    "showWordLimit": false,
                                    "labelIconClass": null,
                                    "validationHint": "",
                                    "labelIconPosition": "rear",
                                    "onAppendButtonClick": "",
                                    "appendButtonDisabled": false
                                },
                                "formItemFlag": true
                            }]
                        }, {
                            "id": "grid-col-59059",
                            "icon": "grid-col",
                            "type": "grid-col",
                            "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol59059", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                            "category": "container",
                            "internal": true,
                            "widgetList": [{
                                "id": "button33515",
                                "key": 54270,
                                "icon": "button",
                                "type": "button",
                                "options": {
                                    "icon": null,
                                    "name": "button33515",
                                    "size": "",
                                    "type": "primary",
                                    "label": "查询",
                                    "plain": false,
                                    "round": false,
                                    "circle": false,
                                    "hidden": false,
                                    "onClick": "// let page = 1\nwindow['t-blablabla'].getTableData(1)",
                                    "disabled": false,
                                    "onCreated": "",
                                    "onMounted": "",
                                    "columnWidth": "200px",
                                    "customClass": "",
                                    "displayStyle": "inline"
                                },
                                "formItemFlag": false
                            }]
                        }, {
                            "id": "grid-col-63561",
                            "icon": "grid-col",
                            "type": "grid-col",
                            "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol63561", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                            "category": "container",
                            "internal": true,
                            "widgetList": []
                        }, {
                            "id": "grid-col-64034",
                            "icon": "grid-col",
                            "type": "grid-col",
                            "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol64034", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                            "category": "container",
                            "internal": true,
                            "widgetList": []
                        }], "icon": "grid", "type": "grid", "options": {"name": "grid34227", "gutter": 12, "hidden": false, "colHeight": "38", "customClass": ""}, "category": "container"
                }, {
                    "id": "grid102600", "key": 81559, "cols": [{
                        "id": "grid-col-102611",
                        "icon": "grid-col",
                        "type": "grid-col",
                        "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol102611", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                        "category": "container",
                        "internal": true,
                        "widgetList": [{
                            "id": "button59959", "key": 52897, "icon": "button", "type": "button", "options": {
                                "icon": null,
                                "name": "button59959",
                                "size": "",
                                "type": "primary",
                                "label": "新增",
                                "plain": false,
                                "round": false,
                                "circle": false,
                                "hidden": false,
                                "onClick": "var dialogOptions = {\r\n  title: '新增', \r\n  hasFullscreenBtn:true,\r\n  isFullscreen: false,\r\n  dialogHeight: '500px',\r\n  dialogWidth: '650px',\r\n  \r\n}\r\n// var dialogFormSchema = {\"widgetList\":[{\"type\":\"static-text\",\"icon\":\"static-text\",\"formItemFlag\":false,\"options\":{\"name\":\"statictext111193\",\"columnWidth\":\"200px\",\"hidden\":false,\"textContent\":\"标签页表单\",\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\",\"label\":\"static-text\"},\"id\":\"statictext111193\"},{\"type\":\"divider\",\"icon\":\"divider\",\"formItemFlag\":false,\"options\":{\"name\":\"divider102346\",\"label\":\"\",\"columnWidth\":\"200px\",\"direction\":\"horizontal\",\"contentPosition\":\"center\",\"hidden\":false,\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\"},\"id\":\"divider102346\"},{\"type\":\"tab\",\"category\":\"container\",\"icon\":\"tab\",\"displayType\":\"border-card\",\"tabs\":[{\"type\":\"tab-pane\",\"category\":\"container\",\"icon\":\"tab-pane\",\"internal\":true,\"widgetList\":[{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input12931\",\"label\":\"发件人姓名\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":[],\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input12931\"},{\"type\":\"switch\",\"icon\":\"switch-field\",\"formItemFlag\":true,\"options\":{\"name\":\"switch96070\",\"label\":\"是否保密\",\"labelAlign\":\"\",\"defaultValue\":true,\"columnWidth\":\"200px\",\"labelWidth\":null,\"labelHidden\":false,\"disabled\":false,\"hidden\":false,\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"switchWidth\":40,\"activeText\":\"\",\"inactiveText\":\"\",\"activeColor\":null,\"inactiveColor\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onValidate\":\"\"},\"id\":\"switch96070\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input23031\",\"label\":\"发件人号码\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input23031\"},{\"type\":\"textarea\",\"icon\":\"textarea-field\",\"formItemFlag\":true,\"options\":{\"name\":\"textarea21654\",\"label\":\"发件人地址\",\"labelAlign\":\"\",\"rows\":3,\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"textarea21654\"},{\"type\":\"divider\",\"icon\":\"divider\",\"formItemFlag\":false,\"options\":{\"name\":\"divider69240\",\"label\":\"\",\"columnWidth\":\"200px\",\"direction\":\"horizontal\",\"contentPosition\":\"center\",\"hidden\":false,\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\"},\"id\":\"divider69240\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input113152\",\"label\":\"收件人姓名\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":[],\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input113152\"},{\"type\":\"checkbox\",\"icon\":\"checkbox-field\",\"formItemFlag\":true,\"options\":{\"name\":\"checkbox63174\",\"label\":\"接收时间段\",\"labelAlign\":\"\",\"defaultValue\":[],\"columnWidth\":\"200px\",\"size\":\"\",\"displayStyle\":\"inline\",\"buttonStyle\":false,\"border\":false,\"labelWidth\":null,\"labelHidden\":false,\"disabled\":false,\"hidden\":false,\"optionItems\":[{\"label\":\"上午9:00 - 11:30\",\"value\":1},{\"label\":\"下午12:30 - 18:00\",\"value\":2},{\"label\":\"晚上18:00 - 21:00\",\"value\":3}],\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onValidate\":\"\"},\"id\":\"checkbox63174\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input40240\",\"label\":\"收件人号码\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input40240\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input78584\",\"label\":\"收件人地址\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input78584\"}],\"options\":{\"name\":\"tab1\",\"label\":\"发件&收件信息\",\"hidden\":false,\"active\":true,\"disabled\":false,\"customClass\":\"\"},\"id\":\"tab-pane-70250\"},{\"type\":\"tab-pane\",\"category\":\"container\",\"icon\":\"tab-pane\",\"internal\":true,\"widgetList\":[{\"type\":\"divider\",\"icon\":\"divider\",\"formItemFlag\":false,\"options\":{\"name\":\"divider75887\",\"label\":\"\",\"columnWidth\":\"200px\",\"direction\":\"horizontal\",\"contentPosition\":\"center\",\"hidden\":false,\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\"},\"id\":\"divider75887\"},{\"type\":\"time-range\",\"icon\":\"time-range-field\",\"formItemFlag\":true,\"options\":{\"name\":\"timerange47503\",\"label\":\"送货时间\",\"labelAlign\":\"\",\"defaultValue\":null,\"startPlaceholder\":\"\",\"endPlaceholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"editable\":false,\"format\":\"HH:mm:ss\",\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"timerange47503\"},{\"type\":\"slider\",\"icon\":\"slider-field\",\"formItemFlag\":true,\"options\":{\"name\":\"slider54714\",\"label\":\"价格保护\",\"labelAlign\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"disabled\":false,\"hidden\":false,\"required\":false,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":[],\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"min\":0,\"max\":100,\"step\":10,\"range\":false,\"height\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onValidate\":\"\",\"showStops\":true},\"id\":\"slider54714\"},{\"type\":\"textarea\",\"icon\":\"textarea-field\",\"formItemFlag\":true,\"options\":{\"name\":\"textarea64794\",\"label\":\"其他信息\",\"labelAlign\":\"\",\"rows\":3,\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"required\":false,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"textarea64794\"}],\"options\":{\"name\":\"tab-pane-48281\",\"label\":\"补充信息\",\"hidden\":false,\"active\":false,\"disabled\":false,\"customClass\":\"\"},\"id\":\"tab-pane-48281\"}],\"options\":{\"name\":\"tab60554\",\"hidden\":false,\"customClass\":[]},\"id\":\"tab60554\"}],\"formConfig\":{\"modelName\":\"formData\",\"refName\":\"vForm\",\"rulesName\":\"rules\",\"labelWidth\":150,\"labelPosition\":\"left\",\"size\":\"\",\"labelAlign\":\"label-right-align\",\"cssCode\":\"\",\"customClass\":[],\"functions\":\"\",\"layoutType\":\"PC\",\"jsonVersion\":3,\"onFormCreated\":\"\",\"onFormMounted\":\"\",\"onFormDataChange\":\"\",\"formName\":\"demo_name列表视图\",\"tableCode\":\"demo_code_list_view\",\"describe\":\"\",\"onFormDestoryed\":\"\",\"onFormValidate\":\"\"}}\r\nvar dialogFormSchema = window['t-blablabla'].dialogFormSchema\r\nvar dialogFormData = {}\r\nthis.showCustomizedDialog(dialogOptions, dialogFormSchema, dialogFormData )",
                                "disabled": false,
                                "onCreated": "",
                                "onMounted": "",
                                "columnWidth": "200px",
                                "customClass": "",
                                "displayStyle": "inline"
                            }, "formItemFlag": false
                        }]
                    }, {
                        "id": "grid-col-92635",
                        "icon": "grid-col",
                        "type": "grid-col",
                        "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol92635", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                        "category": "container",
                        "internal": true,
                        "widgetList": []
                    }, {
                        "id": "grid-col-95655",
                        "icon": "grid-col",
                        "type": "grid-col",
                        "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol95655", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                        "category": "container",
                        "internal": true,
                        "widgetList": []
                    }, {
                        "id": "grid-col-106906",
                        "icon": "grid-col",
                        "type": "grid-col",
                        "options": {"md": 12, "sm": 12, "xs": 12, "name": "gridCol106906", "pull": 0, "push": 0, "span": 6, "hidden": false, "offset": 0, "responsive": false, "customClass": ""},
                        "category": "container",
                        "internal": true,
                        "widgetList": []
                    }], "icon": "grid", "type": "grid", "options": {"name": "grid102600", "gutter": 12, "hidden": false, "colHeight": "38", "customClass": ""}, "category": "container"
                }, {
                    "id": "eltable33591", "key": 104324, "icon": "el-table", "type": "el-table", "options": {
                        "name": "customer_look_record_data_table",
                        "label": "el-table",
                        "border": true,
                        "onCreated": "",
                        "onMounted": "",
                        "actionList": [{
                            "seq": 0,
                            "prop": "editBtn",
                            "type": "primary",
                            "label": "编辑",
                            "isShow": true,
                            "onClick": "var dialogOptions = {\r\n  title: '编辑', \r\n  hasFullscreenBtn:true,\r\n  isFullscreen: false,\r\n  dialogHeight: '500px',\r\n  dialogWidth: '650px',\r\n  \r\n}\r\n// var dialogFormSchema = {\"widgetList\":[{\"type\":\"static-text\",\"icon\":\"static-text\",\"formItemFlag\":false,\"options\":{\"name\":\"statictext111193\",\"columnWidth\":\"200px\",\"hidden\":false,\"textContent\":\"标签页表单\",\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\",\"label\":\"static-text\"},\"id\":\"statictext111193\"},{\"type\":\"divider\",\"icon\":\"divider\",\"formItemFlag\":false,\"options\":{\"name\":\"divider102346\",\"label\":\"\",\"columnWidth\":\"200px\",\"direction\":\"horizontal\",\"contentPosition\":\"center\",\"hidden\":false,\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\"},\"id\":\"divider102346\"},{\"type\":\"tab\",\"category\":\"container\",\"icon\":\"tab\",\"displayType\":\"border-card\",\"tabs\":[{\"type\":\"tab-pane\",\"category\":\"container\",\"icon\":\"tab-pane\",\"internal\":true,\"widgetList\":[{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input12931\",\"label\":\"发件人姓名\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":[],\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input12931\"},{\"type\":\"switch\",\"icon\":\"switch-field\",\"formItemFlag\":true,\"options\":{\"name\":\"switch96070\",\"label\":\"是否保密\",\"labelAlign\":\"\",\"defaultValue\":true,\"columnWidth\":\"200px\",\"labelWidth\":null,\"labelHidden\":false,\"disabled\":false,\"hidden\":false,\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"switchWidth\":40,\"activeText\":\"\",\"inactiveText\":\"\",\"activeColor\":null,\"inactiveColor\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onValidate\":\"\"},\"id\":\"switch96070\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input23031\",\"label\":\"发件人号码\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input23031\"},{\"type\":\"textarea\",\"icon\":\"textarea-field\",\"formItemFlag\":true,\"options\":{\"name\":\"textarea21654\",\"label\":\"发件人地址\",\"labelAlign\":\"\",\"rows\":3,\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"textarea21654\"},{\"type\":\"divider\",\"icon\":\"divider\",\"formItemFlag\":false,\"options\":{\"name\":\"divider69240\",\"label\":\"\",\"columnWidth\":\"200px\",\"direction\":\"horizontal\",\"contentPosition\":\"center\",\"hidden\":false,\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\"},\"id\":\"divider69240\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input113152\",\"label\":\"收件人姓名\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":[],\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input113152\"},{\"type\":\"checkbox\",\"icon\":\"checkbox-field\",\"formItemFlag\":true,\"options\":{\"name\":\"checkbox63174\",\"label\":\"接收时间段\",\"labelAlign\":\"\",\"defaultValue\":[],\"columnWidth\":\"200px\",\"size\":\"\",\"displayStyle\":\"inline\",\"buttonStyle\":false,\"border\":false,\"labelWidth\":null,\"labelHidden\":false,\"disabled\":false,\"hidden\":false,\"optionItems\":[{\"label\":\"上午9:00 - 11:30\",\"value\":1},{\"label\":\"下午12:30 - 18:00\",\"value\":2},{\"label\":\"晚上18:00 - 21:00\",\"value\":3}],\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onValidate\":\"\"},\"id\":\"checkbox63174\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input40240\",\"label\":\"收件人号码\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input40240\"},{\"type\":\"input\",\"icon\":\"text-field\",\"formItemFlag\":true,\"options\":{\"name\":\"input78584\",\"label\":\"收件人地址\",\"labelAlign\":\"\",\"type\":\"text\",\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"showPassword\":false,\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"prefixIcon\":\"\",\"suffixIcon\":\"\",\"appendButton\":false,\"appendButtonDisabled\":false,\"buttonIcon\":\"el-icon-search\",\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"input78584\"}],\"options\":{\"name\":\"tab1\",\"label\":\"发件&收件信息\",\"hidden\":false,\"active\":true,\"disabled\":false,\"customClass\":\"\"},\"id\":\"tab-pane-70250\"},{\"type\":\"tab-pane\",\"category\":\"container\",\"icon\":\"tab-pane\",\"internal\":true,\"widgetList\":[{\"type\":\"divider\",\"icon\":\"divider\",\"formItemFlag\":false,\"options\":{\"name\":\"divider75887\",\"label\":\"\",\"columnWidth\":\"200px\",\"direction\":\"horizontal\",\"contentPosition\":\"center\",\"hidden\":false,\"customClass\":[],\"onCreated\":\"\",\"onMounted\":\"\"},\"id\":\"divider75887\"},{\"type\":\"time-range\",\"icon\":\"time-range-field\",\"formItemFlag\":true,\"options\":{\"name\":\"timerange47503\",\"label\":\"送货时间\",\"labelAlign\":\"\",\"defaultValue\":null,\"startPlaceholder\":\"\",\"endPlaceholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"clearable\":true,\"editable\":false,\"format\":\"HH:mm:ss\",\"required\":true,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"timerange47503\"},{\"type\":\"slider\",\"icon\":\"slider-field\",\"formItemFlag\":true,\"options\":{\"name\":\"slider54714\",\"label\":\"价格保护\",\"labelAlign\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"disabled\":false,\"hidden\":false,\"required\":false,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":[],\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"min\":0,\"max\":100,\"step\":10,\"range\":false,\"height\":null,\"onCreated\":\"\",\"onMounted\":\"\",\"onChange\":\"\",\"onValidate\":\"\",\"showStops\":true},\"id\":\"slider54714\"},{\"type\":\"textarea\",\"icon\":\"textarea-field\",\"formItemFlag\":true,\"options\":{\"name\":\"textarea64794\",\"label\":\"其他信息\",\"labelAlign\":\"\",\"rows\":3,\"defaultValue\":\"\",\"placeholder\":\"\",\"columnWidth\":\"200px\",\"size\":\"\",\"labelWidth\":null,\"labelHidden\":false,\"readonly\":false,\"disabled\":false,\"hidden\":false,\"required\":false,\"validation\":\"\",\"validationHint\":\"\",\"customClass\":\"\",\"labelIconClass\":null,\"labelIconPosition\":\"rear\",\"labelTooltip\":null,\"minLength\":null,\"maxLength\":null,\"showWordLimit\":false,\"onCreated\":\"\",\"onMounted\":\"\",\"onInput\":\"\",\"onChange\":\"\",\"onFocus\":\"\",\"onBlur\":\"\",\"onValidate\":\"\"},\"id\":\"textarea64794\"}],\"options\":{\"name\":\"tab-pane-48281\",\"label\":\"补充信息\",\"hidden\":false,\"active\":false,\"disabled\":false,\"customClass\":\"\"},\"id\":\"tab-pane-48281\"}],\"options\":{\"name\":\"tab60554\",\"hidden\":false,\"customClass\":[]},\"id\":\"tab60554\"}],\"formConfig\":{\"modelName\":\"formData\",\"refName\":\"vForm\",\"rulesName\":\"rules\",\"labelWidth\":150,\"labelPosition\":\"left\",\"size\":\"\",\"labelAlign\":\"label-right-align\",\"cssCode\":\"\",\"customClass\":[],\"functions\":\"\",\"layoutType\":\"PC\",\"jsonVersion\":3,\"onFormCreated\":\"\",\"onFormMounted\":\"\",\"onFormDataChange\":\"\",\"formName\":\"demo_name列表视图\",\"tableCode\":\"demo_code_list_view\",\"describe\":\"\",\"onFormDestoryed\":\"\",\"onFormValidate\":\"\"}}\r\nvar dialogFormSchema = window['t-blablabla'].dialogFormSchema\r\nvar dialogFormData = {...row}\r\nthis.showCustomizedDialog(dialogOptions, dialogFormSchema, dialogFormData )",
                            "isCollapsed": false,
                            "requireConfirm": false
                        }, {"seq": 1, "prop": "delBtn", "type": "primary", "label": "删除", "isShow": true, "onClick": "window['t-blablabla'].deleteRecord(row)", "isCollapsed": false, "requireConfirm": true}],
                        "columnList": [{
                            "seq": 0,
                            "prop": "user_name",
                            "align": "left",
                            "fixed": "left",
                            "label": "巡店人",
                            "isShow": true,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "customer_name",
                            "align": "left",
                            "fixed": "left",
                            "label": "客户名称",
                            "isShow": true,
                            "minWidth": "160",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "customer_address",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "客户地址",
                            "isShow": true,
                            "minWidth": "200",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "industry_type",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "行业类型",
                            "isShow": false,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "look_type",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "巡店类型",
                            "isShow": false,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "start_time",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "到店时间",
                            "isShow": true,
                            "minWidth": "180",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "start_diff_distance",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "到店偏差（米）",
                            "isShow": true,
                            "minWidth": "130",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "force_sign_in_status",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "强制签到状态",
                            "isShow": false,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "force_sign_in_memo",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "签到说明",
                            "isShow": false,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "force_sign_out_status",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "强制签退状态",
                            "isShow": false,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "photo_list",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "巡店照片",
                            "isShow": true,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "images",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }, {
                            "seq": 0,
                            "prop": "look_status",
                            "align": "left",
                            "fixed": "noFixed",
                            "label": "巡店状态",
                            "isShow": true,
                            "minWidth": "120",
                            "sortable": false,
                            "actionClass": "",
                            "actionWidth": "",
                            "displayType": "string",
                            "headerClass": "",
                            "showOverflowTooltip": true,
                            "onHideOperationButton": "",
                            "onDisableOperationButton": ""
                        }],
                        "onRowClick": "",
                        "customClass": "",
                        "onCellClick": "",
                        "tableHeight": "calc(100vh-315px)",
                        "onHeaderClick": "",
                        "onPageNumChange": "window['t-blablabla'].getTableData(pageNum, pageSize)",
                        "onPageSizeChange": "window['t-blablabla'].getTableData(pageNum, pageSize)",
                        "onRowDoubleClick": "",
                        "onCellDoubleClick": "",
                        "actionColumnFixedWidth": "120"
                    }, "formItemFlag": false
                }],
            "formConfig": {
                "modelName": "formData",
                "refName": "vForm",
                "rulesName": "rules",
                "labelWidth": 100,
                "labelPosition": "left",
                "size": "",
                "labelAlign": "label-right-align",
                "cssCode": ".flex{display: flex;}\n.ml-16{margin-left:16px;}\n.mr-16{margin-right:16px;}\n.mt-16{margin-top:16px;}\n.mb-16{margin-bottom:16px;}",
                "customClass": [],
                "functions": "/***\r\n * 1. localstorage部分\r\n * 全局提供 $localstoraged 对象\r\n * $localStorage.getToken()\r\n * $localStorage.getTenantCode()\r\n * $localStorage.getTenantInfo()\r\n * $localStorage.getENC()\r\n * $localStorage.getMyProfile()\r\n * $localStorage.getCurApplicationInfo()\r\n * $localStorage.set({ name, content, type })\r\n * $localStorage.get(name)\r\n *\r\n * ****************************************************************************\r\n *\r\n * 2. axios 部分\r\n * 全局提供$axios对象, 此对象已增强，有request和response的拦截器功能\r\n * 若要为axios设置全局header：\r\n * const token = $localStorage.getToken();\r\n * $axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;\r\n * $axios.getAction(url = '', param = {})\r\n * $axios.postAction(url = '', data = {}, config = {})\r\n * $axios.putAction(url = '', data = {}, config = {})\r\n * $axios.deleteAction(url = '', config = {})\r\n * $axios.downloadAction(params = '') ????? /epms/file/proxyDown?` + params\r\n *\r\n * ****************************************************************************\r\n *\r\n * 3. fieldModel 部分\r\n * 每一个组件都有自己的 fieldModel, 里面存储了他的值, 大部分都是一个简单的对象, 只有一个值\r\n * 通过 getValue() setValue() 即可操作\r\n * 但有些组件例外,特别是自定义组件:\r\n * 自定义组件【el-table】的fieldModel结构为\r\n * {\r\n *         loading: false,\r\n *         pageSize: 10,\r\n *         pageNum: 1,\r\n *         totalElements: 0,\r\n *         data: [],\r\n * }\r\n * 可以使用 获取值 :getValue(),  fieldModel.pageNum, 和设置值 fieldModel.pageNum = 1\r\n *\r\n */\r\ndebugger\r\n// ========== 【axios 全局的】 ==========\r\nvar token = $localStorage.getToken();\r\n$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;\r\n$axios.defaults.baseURL = '/epms2-api'\r\n$axios.defaults.timeout = 10 * 1000\r\n\r\n// ========== 【表单全局命名】 ==========\r\nvar UNIQUE_FORM_CODE = 't-blablabla';\r\n\r\n// ========== 【表单全局函数】 整个表单全局函数，只声明 一个 对象！==========\r\nwindow[UNIQUE_FORM_CODE] = window[UNIQUE_FORM_CODE] || {\r\n    PRIMARY_DATA_TABLE_NAME: \"customer_look_record_data_table\", // 数据表的唯一名称, 若有数据表.\r\n    PRIMARY_DATA_TABLE_CODE: \"customer_look_record\", // 数据表(在线数据表)的code, 用于接口调用, 若有数据表.\r\n    DIALOG_FORM_VIEW_CODE: \"dialog\", // 表单视图code, 用于接口调用, 若有弹窗.\r\n\r\n    formRef: null,\r\n    dialogFormSchema: null,\r\n    setFormRef(ref) {\r\n        this.formRef = ref // 在form的onMounted里面调用setFormRef(this)来设置formRef\r\n    },\r\n    getValidProperties(res) {\r\n        const properties = JSON.parse(JSON.stringify(res))\r\n        for (let key in properties) {\r\n            if (properties.hasOwnProperty(key)) {\r\n                if (properties[key] == \"\" || JSON.stringify(properties[key]) == '[\"\"]') {\r\n                    delete properties[key]\r\n                }\r\n            }\r\n        }\r\n        return properties;\r\n    },\r\n    getTableData(page) {\r\n        if (!this.PRIMARY_DATA_TABLE_CODE) return // 未设置的话就没必要继续了\r\n        if (!this.formRef) {\r\n            alert(\"formRef 未初始化, 在form的onMounted里面调用setFormRef(this)来设置formRef\")\r\n            return\r\n        }\r\n        const tableRef = this.formRef.getWidgetRef(this.PRIMARY_DATA_TABLE_NAME);\r\n        const {data, pageNum, pageSize, totalElements} = tableRef.getValue()\r\n        // 获取表单数据对象 (needValidation = true)，获取表单数据时是否开启表单校验，默认开启。\r\n        // 注意：开启表单校验，返回的是一个Promise对象，否则返回数据对象。\r\n        const conditions = this.getValidProperties(this.formRef.getFormData(false))\r\n        const queryParams = {\r\n            \"params\": {\r\n                \"tableCode\": this.PRIMARY_DATA_TABLE_CODE,\r\n                \"conditions\": conditions\r\n            },\r\n            \"ignoreFieldList\": [\r\n                \"version_timestamp\",\r\n                \"creation_operator_snapshot\",\r\n                \"update_operator_snapshot\",\r\n            ],\r\n            \"page\": page || pageNum,\r\n            \"size\": pageSize,\r\n            \"sort\": [\r\n                \"creation_time,desc\",\r\n                \"id,desc\"\r\n            ]\r\n        };\r\n\r\n        tableRef.fieldModel.loading = true\r\n        const config = {params: {tableCode: this.PRIMARY_DATA_TABLE_CODE}}\r\n        $axios.postAction('/api/form/FormDynamicView.queryAll.query', queryParams, config).then(res => {\r\n            tableRef.fieldModel.data = res.data.data.content\r\n            tableRef.fieldModel.pageNum = page || pageNum\r\n            tableRef.fieldModel.totalElements = res.data.data.totalElements\r\n        }).finally(() => {\r\n            tableRef.fieldModel.loading = false\r\n        })\r\n    },\r\n    deleteTableRecord(row) {\r\n        const data = {\"data\": {\"ids\": [row.id], \"tableCode\": this.PRIMARY_DATA_TABLE_CODE}}\r\n        const config = {params: {tableCode: this.PRIMARY_DATA_TABLE_CODE}}\r\n        $axios.postAction('/api/form/FormDynamicTransactor.delete.command', data, config).then(res => {\r\n            const tableRef = this.formRef.getWidgetRef(this.PRIMARY_DATA_TABLE_NAME);\r\n            if (tableRef.fieldModel.data.length === 1 && tableRef.fieldModel.pageNum > 1) {\r\n                tableRef.fieldModel.pageNum--\r\n            }\r\n            this.getTableData(tableRef.fieldModel.pageNum)\r\n        }).finally(() => {\r\n        })\r\n    },\r\n    getDialogFormViewSchema() {\r\n        if (!this.DIALOG_FORM_VIEW_CODE) return // 未设置的话就没必要继续了\r\n        const data = {\"params\": {\"viewCode\": this.DIALOG_FORM_VIEW_CODE}}\r\n        const config = {}\r\n        $axios.postAction('/api/epms/FormView.queryAll.query', data, config).then(res => {\r\n            if (!res.data.data.content.length) {\r\n                alert(\"弹框表单视图的code可能不对,查无数据\")\r\n                return\r\n            }\r\n            this.dialogFormSchema = res.data.data.content[0].metadata\r\n            // const tableRef = this.formRef.getWidgetRef(this.PRIMARY_DATA_TABLE_NAME);\r\n            // if (tableRef.fieldModel.data.length === 1 && tableRef.fieldModel.pageNum > 1) {\r\n            //     tableRef.fieldModel.pageNum--\r\n            // }\r\n            // this.getTableData(tableRef.fieldModel.pageNum)\r\n        }).finally(() => {\r\n        })\r\n    },\r\n\r\n}\r\n",
                "layoutType": "PC",
                "jsonVersion": 3,
                "onFormCreated": "",
                "onFormMounted": "\nwindow['t-blablabla'].setFormRef(this)\nwindow['t-blablabla'].getTableData(1)\nwindow['t-blablabla'].getDialogFormViewSchema()",
                "onFormDataChange": "",
                "onFormValidate": "",
                "describe": "",
                "formName": "",
                "tableCode": "",
                "onFormDestoryed": ""
            }
        }
    },
    {
        title: "弹框",
        metadata: {"widgetList":[{"id":"input19276","key":119483,"icon":"text-field","type":"input","options":{"name":"user_name","size":"","type":"text","label":"巡店人","hidden":false,"onBlur":"","onFocus":"","onInput":"","disabled":false,"onChange":"","readonly":false,"required":false,"clearable":true,"maxLength":null,"minLength":null,"onCreated":"","onMounted":"","buttonIcon":"custom-search","labelAlign":"","labelWidth":null,"onValidate":"","prefixIcon":"","suffixIcon":"","validation":"","columnWidth":"200px","customClass":"","labelHidden":false,"placeholder":"请输入","appendButton":false,"defaultValue":"","labelTooltip":null,"requiredHint":"","showPassword":false,"showWordLimit":false,"labelIconClass":null,"validationHint":"","labelIconPosition":"rear","onAppendButtonClick":"","appendButtonDisabled":false},"formItemFlag":true},{"id":"input21475","key":119483,"icon":"text-field","type":"input","options":{"name":"customer_name","size":"","type":"text","label":"客户名称","hidden":false,"onBlur":"","onFocus":"","onInput":"","disabled":false,"onChange":"","readonly":false,"required":false,"clearable":true,"maxLength":null,"minLength":null,"onCreated":"","onMounted":"","buttonIcon":"custom-search","labelAlign":"","labelWidth":null,"onValidate":"","prefixIcon":"","suffixIcon":"","validation":"","columnWidth":"200px","customClass":"","labelHidden":false,"placeholder":"请输入","appendButton":false,"defaultValue":"","labelTooltip":null,"requiredHint":"","showPassword":false,"showWordLimit":false,"labelIconClass":null,"validationHint":"","labelIconPosition":"rear","onAppendButtonClick":"","appendButtonDisabled":false},"formItemFlag":true},{"id":"input86987","key":119483,"icon":"text-field","type":"input","options":{"name":"customer_address","size":"","type":"text","label":"客户地址","hidden":false,"onBlur":"","onFocus":"","onInput":"","disabled":false,"onChange":"","readonly":false,"required":false,"clearable":true,"maxLength":null,"minLength":null,"onCreated":"","onMounted":"","buttonIcon":"custom-search","labelAlign":"","labelWidth":null,"onValidate":"","prefixIcon":"","suffixIcon":"","validation":"","columnWidth":"200px","customClass":"","labelHidden":false,"placeholder":"请输入","appendButton":false,"defaultValue":"","labelTooltip":null,"requiredHint":"","showPassword":false,"showWordLimit":false,"labelIconClass":null,"validationHint":"","labelIconPosition":"rear","onAppendButtonClick":"","appendButtonDisabled":false},"formItemFlag":true},{"id":"grid102157","key":108751,"cols":[{"id":"grid-col-99158","icon":"grid-col","type":"grid-col","options":{"md":12,"sm":12,"xs":12,"name":"gridCol99158","pull":0,"push":0,"span":24,"hidden":false,"offset":0,"responsive":false,"customClass":["text-right"]},"category":"container","internal":true,"widgetList":[{"id":"button68326","key":56381,"icon":"button","type":"button","options":{"icon":null,"name":"button68326","size":"","type":"","label":"关闭","plain":false,"round":false,"circle":false,"hidden":false,"onClick":"this.hideCustomizedDialog()","disabled":false,"onCreated":"","onMounted":"","columnWidth":"200px","customClass":"","displayStyle":"inline"},"formItemFlag":false},{"id":"button69737","key":13058,"icon":"button","type":"button","options":{"icon":null,"name":"button69737","size":"","type":"primary","label":"确定","plain":false,"round":false,"circle":false,"hidden":false,"onClick":"","disabled":false,"onCreated":"","onMounted":"","columnWidth":"200px","customClass":["ml-8"],"displayStyle":"inline"},"formItemFlag":false}]}],"icon":"grid","type":"grid","options":{"name":"grid102157","gutter":12,"hidden":false,"colHeight":"38","customClass":["text-center"]},"category":"container"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":100,"labelPosition":"left","size":"","labelAlign":"label-right-align","cssCode":".flex{display: flex;align-items: center;}\n.flex1{flex:1}\n.ml-8{margin-left:8px;}\n.mr-8{margin-right:8px;}\n.mt-8{margin-top:8px;}\n.mb-8{margin-bottom:8px;}\n.ml-16{margin-left:16px;}\n.mr-16{margin-right:16px;}\n.mt-16{margin-top:16px;}\n.mb-16{margin-bottom:16px;}\n.text-center{text-align:center}\n.text-right{text-align:right}\n.w-full{width:100%}\n.w-full{width:100%}\n.h-full{height:100%}","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":"","describe":"","formName":"","tableCode":"","onFormValidate":"","onFormDestoryed":""}}
    }

    // {
    //     title: '单列表单',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t1.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json1.txt',
    //     description: '表单模板详细说明...'
    // },
    // {
    //     title: '多列表单',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t2.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json2.txt',
    //     description: '表单模板详细说明...'
    // },
    // {
    //     title: '分组表单',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t3.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json3.txt',
    //     description: '表单模板详细说明...'
    // },
    // {
    //     title: '标签页表单',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t4.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json4.txt',
    //     description: '表单模板详细说明...'
    // },
    // {
    //     title: '主从表单',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t5.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json5.txt',
    //     description: '表单模板详细说明...'
    // },
    // {
    //     title: '响应式表单',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t6.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json6.txt',
    //     description: '表单模板详细说明...'
    // },
    // {
    //     title: '问卷调查表',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t7.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json7.txt',
    //     description: '表单模板详细说明...'
    // },
    // {
    //     title: '固定表格表单',
    //     imgUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/t8.png',
    //     jsonUrl: 'https://ks3-cn-beijing.ksyuncs.com/vform-static/form-samples/json8.txt',
    //     description: '表单模板详细说明...'
    // },

]
