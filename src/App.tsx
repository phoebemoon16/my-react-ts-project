/*
 * @Author: wanghh
 * @Date: 2021-12-10 08:43:07
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-27 09:17:20
 * @Description: 
 */
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,Route,Routes,Link
} from "react-router-dom";
import routes from './routers/config';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function App() {
  return (
    <Router>
     <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">
              <Link to="/demo1"></Link>demo1</Menu.Item>
            <Menu.Item key="2"><Link to="/login"></Link>login</Menu.Item>
            <Menu.Item key="3">
              <Link to="/props">props练习</Link>
            </Menu.Item>
            <Menu.Item key="4">
            <Link to="/list">list 循环练习</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5"> <Link to="/statusList">状态练习</Link></Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         <Routes>{
          routes.map((route,index) => (
            <Route key={index} path={route.path} element={<route.main />} />
          ))
          } 
        </Routes>
        </Content>
      </Layout>
    </Layout>
  </Layout> {/* <Link to="/home" ></Link> */}
  </Router>
  );
}

export default App;
