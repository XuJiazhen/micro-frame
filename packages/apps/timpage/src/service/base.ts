// import store from '../store/index'
import axios, { AxiosResponse } from 'axios'

// 添加请求拦截器
const baseURL = ''
axios.defaults.headers.common['CommonType'] = 'shouka'
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf8'
axios.interceptors.request.use(
  function (config) {
    config.baseURL = baseURL
    config.timeout = 5000
    const token = window.localStorage.getItem('token')
    config.headers.Authorization = 'Bearer ' + token
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  function (response: AxiosResponse) {
    // 2xx 范围内的状态码都会触发该函数。
    // if (response.data.status === 401) {
    // }
    // 对响应数据做点什么
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)
class BaseHttp {
  async get(url: string, params: any) {
    const res = await axios({
      method: 'get',
      url: url,
      params
    })
    return res.data
  }
  async post(url: string, params: any) {
    const res = await axios({
      method: 'post',
      url: url,
      data: params
    })
    return res.data
  }
  async upload(url: string, params: any) {
    const res = await axios({
      method: 'post',
      url: url,
      data: params
    })
    return res.data
  }
  async put(url: string, params: any) {
    const res = await axios({
      method: 'put',
      url: url,
      data: params
    })
    return res.data
  }
  async delete(url: string, params: any) {
    const res = await axios({
      method: 'delete',
      url: url,
      params
    })
    return res.data
  }
}

export default new BaseHttp()
