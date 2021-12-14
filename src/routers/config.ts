
/*
 * @Author: wanghh
 * @Date: 2021-12-09 17:46:20
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 08:44:43
 * @Description: 路由设置
 */
import React from 'react';
import UserLayout from '../layouts/UserLayout';
import Login from '../pages/Login'

export interface IRouteBase {
    path: string;
    component?: any;
    main?: any;
    redirect?:string;
    meta:IRouteMeta;
    auth?:boolean
}

export interface IRouteMeta {
    title:string;
    icon?:string
}

export interface IRoute extends IRouteBase {
    children?: IRoute[]
}

const routes:IRoute[] = [
    {
        path:'/home',
        component:React.lazy(() => import('../layouts/UserLayout')),
        meta: {
            title: '系统路由'
        },
        children:[],
        main: UserLayout
    },
    {
        path:'/login',
        component:React.lazy(() => import('../layouts/UserLayout')),
        meta: {
            title: '登录页面'
        },
        children:[],
        main: Login
    }
]

export default routes