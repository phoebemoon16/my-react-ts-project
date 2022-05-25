/*
 * @Author: wanghh
 * @Date: 2021-12-09 17:46:20
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-25 10:41:35
 * @Description: 路由设置
 */
// import React from 'react';
import UserLayout from '../layouts/UserLayout'
import Login from '../pages/Login/Login'
import Demo1 from '../pages/Demo/demo1'
import Props from '../pages/Demo/props'
import List from '../pages/Demo/list'
import Example from '../pages/Demo/funHook'
import WeChat from '../pages/Demo/chat'
import Parent from '../pages/valueTrans/parent'
import Reduxs from '../pages/Redux'
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
  children?: IRouteBase[]
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
      },
      {
        path: '/parent',
        meta: {
          title: '父子传值'
        },
        main: Parent
      }
    ]
  },
  {
    path: '/login',
    meta: {
      title: '登录页面'
    },
    main: UserLayout,
    children: [
      {
        path: '/login/index',
        meta: {
          title: '登录页面'
        },
        main: Login
      },
      {
        path: '/list',
        meta: {
          title: 'list'
        },
        main: List
      }
    ]
  },
  {
    path: '/props',
    meta: {
      title: 'demo'
    },
    children: [],
    main: Props
  },
  // StatusList
  {
    path: '/statusList',
    meta: {
      title: 'statusList'
    },
    children: [],
    main: Example
  },
  {
    path: '/weChat',
    meta: {
      title: '聊天框'
    },
    children: [],
    main: WeChat
  },
  {
    path: '/reduxs',
    meta: {
      title: 'redux学习'
    },
    children: [],
    main: Reduxs
  }
]

export default routes
