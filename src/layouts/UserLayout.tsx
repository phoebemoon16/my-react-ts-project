/*
 * @Author: wanghh
 * @Date: 2021-12-09 18:15:54
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 16:05:28
 * @Description: 
 */
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom'
// import routes from '../routers/config';

interface UserLayoutState {
    isError: boolean;
  }

const { SubMenu } = Menu;
const { Header, Sider } = Layout;
  

function layout (){
  return (
    <div>系统模块</div>
  )
}
class UserLayout extends React.PureComponent<any, UserLayoutState> {
    state: UserLayoutState = {
      isError: false,
    };
    render(){
        return (
            <div> { layout() }</div>
        )
    }

}
export default UserLayout;