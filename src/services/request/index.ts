import axios, { AxiosInstance } from 'axios'
import { RequestConfig, RequestInterceptors } from './type'

const DEFAULT_LOADING = true

class Request {
  instance: AxiosInstance
  interceptors?: RequestInterceptors
  showLoading?: boolean

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)

    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 1.添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => config,
      (err) => err
    )

    this.instance.interceptors.response.use(
      (res) => res,
      (err) => {
        if (err.response) {
          const errorData: string = err.response.data as string
          return Promise.reject(errorData)
        }
        return Promise.reject('请求超时, 请刷新重试')
      }
    )

    // 2.添加实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request<T = any>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1.单个请求对请求config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2.判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1.单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // 2.将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          // 3.将结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将showLoading设置true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default Request
