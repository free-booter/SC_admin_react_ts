import BaseLayout from '@/layout'
import Analysis from '@/views/Analysis'
import Blog from '@/views/Blog'
import BookCenter from '@/views/Book/bookCenter'
import Sort from '@/views/Book/sort'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Notice from '@/views/Notice'
import AfterSale from '@/views/Order/afterSale'
import OrderCenter from '@/views/Order/orderCenter'
import Menu from '@/views/System/menu'
import Role from '@/views/System/role'
import School from '@/views/System/school'
import User from '@/views/System/user'
import React from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        element: <Navigate to="/home" />,
        index: true // 这里设置为true表示是默认路由
      },
      {
        path: '/home',
        element: <Home />,
        id: '首页'
      },
      {
        path: '/analysis',
        element: <Analysis />,
        id: '数据分析'
      },
      {
        path: '/system',
        id: '系统管理',
        children: [
          {
            element: <Navigate to="/system/user" />,
            index: true, // 这里设置为true表示是默认路由
            id: '系统管理'
          },
          {
            path: '/system/user',
            element: <User />,
            id: '用户管理'
          },
          {
            path: '/system/role',
            element: <Role />,
            id: '角色管理'
          },
          {
            path: '/system/school',
            element: <School />,
            id: '学校管理'
          },
          {
            path: '/system/menu',
            element: <Menu />,
            id: '菜单管理'
          }
        ]
      },
      {
        path: '/book',
        id: '图书管理',
        children: [
          {
            element: <Navigate to="/book/center" />,
            index: true // 这里设置为true表示是默认路由
          },
          {
            path: '/book/center',
            element: <BookCenter />,
            id: '图书中心'
          },
          {
            path: '/book/sort',
            element: <Sort />,
            id: '分类管理'
          }
        ]
      },
      {
        path: '/order',
        id: '订单管理',
        children: [
          {
            element: <Navigate to="/order/center" />,
            index: true // 这里设置为true表示是默认路由
          },
          {
            path: '/order/center',
            element: <OrderCenter />,
            id: '订单中心'
          },
          {
            path: '/order/afterSale',
            element: <AfterSale />,
            id: '售后管理'
          }
        ]
      },
      {
        path: '/Blog',
        element: <Blog />,
        id: '逛逛'
      },
      {
        path: '/notice',
        element: <Notice />,
        id: '我的消息'
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes
