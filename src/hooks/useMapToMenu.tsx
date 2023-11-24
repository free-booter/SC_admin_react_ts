import React from 'react'
import { NavLink } from 'react-router-dom'

import routes from '@/router'
import { uuid } from '@/utils'

// 获取所有的路由信息
export const recurseRoutes = (routes: any[]) => {
  const menu: any[] = []
  if (routes) {
    routes.forEach((route) => {
      if (route.path && route.path.split('/').length != 1) {
        menu.push({
          path: route.path,
          name: route.name,
          meta: route.meta,
          children: recurseRoutes(route.children)
        })
      }
    })
    return menu
  } else {
    return null
  }
}

export const useGetAllRoute = (router: any[]) => {
  return recurseRoutes(router[0].children) || []
}

export const generateMenu = (routes: any[]) => {
  const recurseMenu = (routes: any[]) => {
    const menu: any[] = []
    if (routes) {
      routes.forEach((route) => {
        if (route.path) {
          let obj = {}
          if (route.children) {
            obj = {
              label: route.id,
              key: uuid(),
              children: recurseMenu(route.children)
            }
          } else {
            obj = {
              label: <NavLink to={route.path}>{route.id}</NavLink>,
              key: uuid()
            }
          }
          menu.push(obj)
        }
      })
    }
    return menu
  }
  return recurseMenu(routes)
}

export const useRouteToMenu = () => {
  console.log(generateMenu(routes[0].children || []))

  return generateMenu(routes[0].children || [])
}
