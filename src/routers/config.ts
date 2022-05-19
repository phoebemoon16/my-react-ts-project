/*
 * @Author: wanghh
 * @Date: 2021-12-09 17:46:20
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 15:58:41
 * @Description: 路由设置
 */
// import React from 'react';
import UserLayout from '../layouts/UserLayout'
import Login from '../pages/Login/Login'
import Demo1 from '../pages/Demo/demo1'
import Props from '../pages/Demo/props'
import List from '../pages/Demo/list'
import Example from '../pages/Demo/funHook'
export interface IRouteBase {
  path: string
  component?: any
  main?: any
  redirect?: string
  meta: IRouteMeta
  auth?: boolean
}

export interface IRouteMeta {
  title: string
  icon?: string
}

export interface IRoute extends IRouteBase {
  children: IRouteBase[]
}

const routes: IRoute[] = [
  {
    path: '/',
    meta: {
      title: '系统模块'
    },
    main: UserLayout,
    children: [
      {
        path: '/system',
        meta: {
          title: '系统路由'
        },
        main: UserLayout
      },
      {
        path: '/demo1',
        meta: {
          title: 'demo1'
        },
        main: Demo1
      }
    ]
  },
  {
    path: '/login',
    meta: {
      title: '登录页面'
    },
    children: [],
    main: Login
  },
  {
    path: '/props',
    meta: {
      title: 'demo'
    },
    children: [],
    main: Props
  },
  {
    path: '/list',
    meta: {
      title: 'list'
    },
    children: [],
    main: List
  },
  // StatusList
  {
    path: '/statusList',
    meta: {
      title: 'statusList'
    },
    children: [],
    main: Example
  }
]

export default routes
