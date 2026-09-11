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

    if (isFileStream(response)) {
      return downloadFileStream(response)
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

const isFileStream = (response) => {
// ========== 新增：二进制文件下载分支 ==========
  const contentType = response.headers['content-type'] || ''
  // 判断是文件流：excel / 二进制blob，你可以按需扩展mime
  return contentType.includes('application/vnd.ms-excel')
    || contentType.includes('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    || contentType.includes('application/octet-stream')
}

const downloadFileStream = (response) => {
  // 从Content-Disposition解析文件名（后端标准方案）
  const disposition = response.headers['content-disposition']
  let filename = "文件名解析失败.unknown"
  if (disposition) {
    try {
      const match = disposition.match(/filename\*?=([^;]+)/)
      if (match) filename = decodeURIComponent(match[1].replace(/"/g, ''))
    } catch (e) {
      console.error("decodeURIComponent(response.content-disposition.filename)失败")
    }
  }

  const blob = new Blob([response.data])
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
  // 文件下载场景，直接resolve原始response，不进业务json判断
  return response
}


export default axiosInstance
