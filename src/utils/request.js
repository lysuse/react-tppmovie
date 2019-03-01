import axios from 'axios'
import qs from 'qs'

// 全局错误码处理
const ERROR_CODE_MAP = {
  401: {
    message: '',
    process: (resp) => {}
  }
}

// 错误处理
const errorProcess = (resp, reject) => {
  let message = resp.data.message || resp.data.msg || resp.statusText
  if (ERROR_CODE_MAP[resp.data.stats] && ERROR_CODE_MAP[resp.data.stats].message) {
    message = ERROR_CODE_MAP[resp.data.stats].message
  }
  // const toast = Toast(message)
  console.log(message)
  reject({message: message, data: resp.data || {}})
}

// 处理响应
const responseProcess = (resp, resolve, reject) => {
  // 非成功响应
  if (!(resp.status >= 200 && resp.status < 300)) {
    reject({message: resp.data.message || resp.statusText, data: resp.data || {}})
    return
  }
  // 其他及外部服务器直接返回成功
  resolve(resp.data || {})
}

const $http = {
  /**
  * @params url 请求地址 [http(s)://]/api/xxx
  * @params method 请求方式 POST、GET、DELETE
  * @params params 请求参数
  * @params isJosn 是否为requestBody json方式
  * @params loading 是否显示加载提示
  **/
  request (url, method, params, isJson = false, loading = false, config) {
    // eslint-disable-next-line
    const isOutServer = /^(http|https)\:\/\//.test(url)
    let reqUrl = url
    // 不是外部服务器需要做相应处理
    if (!isOutServer) {
      reqUrl = reqUrl.lastIndexOf('?') > -1 ? reqUrl.substring(0, reqUrl.lastIndexOf('?')) : reqUrl
      reqUrl = 'http://localhost:8080/v2/movie' + reqUrl
    }
    params = params || {}
    params = Object.assign({}, params, {apikey: '0b2bdeda43b5688921839c8ecb20399b'});
    if (method.toUpperCase() === 'GET') {
      reqUrl = `${reqUrl}?${qs.stringify(params)}`
    }
    return new Promise(function (resolve, reject) {
      if (loading) {
        // Indicator.open()
      }
      const axiosData = {
        url: reqUrl,
        method: method || 'POST',
        data: isJson ? params : qs.stringify(params)
      };
      if (config) {
        axiosData.config = config;
      }
      axios(axiosData).then(res => {
        responseProcess(res, resolve, reject)
      }).catch(e => {
        const errorResponse = e.response ? e.response : {data: {message: e.message, stats: e.request.status}}
        errorProcess(errorResponse, reject)
      }).finally(() => {
        if (loading) {
          // Indicator.close()
        }
      })
    })
  },
  post (url, params, loading) {
    return this.request(url, 'POST', params, false, loading)
  },
  get (url, params, loading) {
    return this.request(url, 'GET', params, false, loading)
  },
  postJson (url, params, loading) {
    return this.request(url, 'POST', params, true, loading)
  },
  postFormData(url, params, loading) {
    return this.request(url, 'POST', params, loading, {headers: {'Content-Type': 'multipart/form-data'}})
  }
}

export default $http;