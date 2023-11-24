import request from '..'

export const reqLogin = (username: string, password: string) =>
  request.post({ url: '/login', data: { username, password } })
