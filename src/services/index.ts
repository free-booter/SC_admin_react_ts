import { AxiosError } from 'axios'
import Request from './request'
import { BASE_URL, TIMEOUT } from './request/config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 1. 添加token
      const token = JSON.parse(
        (localStorage.getItem('userInfo') as string) || '{}'
      ).token
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      // 2. 添加loading
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err: AxiosError) => {
      return Promise.reject(err)
    }
  }
})
export default request
