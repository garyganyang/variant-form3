import axios from 'axios'
import {$localStorage} from "@/axios/application-storage.js";
import {ElMessage} from "element-plus";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: baseURL, // 可以在 .env 文件中配置
    timeout: 5000 // 请求超时时间
})
const noneTokenUrls = [`/api/auth/oauth/token`, `TenantView.queryMyByCode.query`] // 不需要带token的接口集合
// 请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        // 在发送请求之前做些什么，例如添加 token
        config.url = `/${$localStorage.getTenantCode()}${config.url}`
        return config
    },
    error => {
        // 处理请求错误
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        if (response.data.exception) {
            console.error(response.data.message)
            ElMessage.error(response.data.message)
            return Promise.reject({response})
        }

        // 对响应数据做点什么
        return response
    },
    error => {
        // 处理响应错误
        console.error('err' + error)
        ElMessage.error(error)
        return Promise.reject(error)
    }
)

axiosInstance.getAction = function (url = '', param = {}) {
    return axiosInstance.get(url, param)
}
axiosInstance.postAction = function (url = '', data = {}, config = {}) {
    // if (!config['headers']) {
    //     config['headers'] = { 'Content-Type': 'application/json' }
    // }
    //
    // // 如果请求地址是FormDynamicTransactor或者FormDynamicView,则将表编码作为queryParams带上
    // if (url.includes('FormDynamicTransactor') && data.data.tableCode && !url.includes('tableCode=')) {
    //     url += '?tableCode=' + data.data.tableCode
    // }
    // if (url.includes('FormDynamicView') && data.params.tableCode && !url.includes('tableCode=')) {
    //     url += '?tableCode=' + data.params.tableCode
    // }
    // // 进行加解密处理
    // // 如果开启加密，则按加密提交，当程序没有握手，则阻止本次请求，改成握手请求
    // const enc = local.get('E-o-enc')
    //
    // if (enc && enc !== 'N' && (url.endsWith('command') || url.endsWith('query') || url.includes('custom-api'))) {
    //     var key = null
    //     if (enc === 'F') {
    //         key = fixSmsKey
    //     } else {
    //         var timestamp = new Date().getTime()
    //         var baseNum = parseInt(timestamp / 100000)
    //         key = baseNum + '00000000'
    //     }
    //
    //     key = stringToHex(key)
    //     var sm4 = Sm4Crypto
    //     var encryptData = sm4.encrypt(JSON.stringify(data), key)
    //     return axiosInstance.axios.post(url, 'enc' + encryptData, config)
    // } else {
    //     return axiosInstance.post(url, data, config)
    // }
    // // if (!handdshake) {
    // //   axiosInstance.axios.post(`/api/epms/handshake`, {} + encryptData, config)
    // // } else {
    // // }

    return axiosInstance.post(url, data, config)
}
axiosInstance.putAction = function (url = '', data = {}, config = {}) {
    return axiosInstance.put(url, data, config)
}
axiosInstance.deleteAction = function (url = '', config = {}) {
    return axiosInstance.delete(url, config)
}
axiosInstance.downloadAction = function (params = '') {
    const tenantCode = JSON.parse(localStorage.getItem('E-o-tenant-code')).content
    window.open(`${baseURL}/${tenantCode}/api/epms/file/proxyDown?` + params)
}

export default axiosInstance
