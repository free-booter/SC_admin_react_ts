import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface RequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: AxiosError) => any
}

export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>
  showLoading?: boolean
}
