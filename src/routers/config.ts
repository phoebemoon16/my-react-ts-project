
/*
 * @Author: wanghh
 * @Date: 2021-12-09 17:46:20
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 17:58:57
 * @Description: 路由设置
 */
// import React from 'react';
import UserLayout from '../layouts/UserLayout';
import Login from '../pages/Login/Login'
import Demo1 from '../pages/Demo/demo1';

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
        path:'/',
        meta: {
            title: '系统路由'
        },
        children:[],
        main: UserLayout
    },
    {
        path:'/login',
        meta: {
            title: '登录页面'
        },
        children:[],
        main: Login
    },
    {
        path:'/demo1',
        meta: {
            title: 'demo'
        },
        children:[],
        main: Demo1
    }
]

export default routes