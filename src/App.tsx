/*
 * @Author: wanghh
 * @Date: 2021-12-10 08:43:07
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-24 11:51:06
 * @Description:
 */
import React from 'react'
// import logo from './logo.svg';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'
import routes from './routers/config'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import Demo1 from './pages/Demo/demo1'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

function App() {
  const location = useLocation()
  console.log(location)
  return (
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
          <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
            {routes.map(route =>
              route && route.children && route.children.length > 0 ? (
                <SubMenu key={route.path} title={route.meta.title}>
                  {route.children.map(item => (
                    <Menu.Item key={item.path}>
                      <Link to={item.path}>{item.meta.title}</Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={route.path + 'menu'}>
                  <Link to={route.path}>{route.meta.title}</Link>
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px', backgroundColor: 'white', border: '5px solid #eee' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{location.pathname}</Breadcrumb.Item>
            </Breadcrumb>
            <Routes>
              {routes.map((route, index) =>
                route && route.children && route.children.length > 0 ? (
                  route.children.map((item, index) => <Route key={index} path={item.path} element={<item.main />} />)
                ) : (
                  <Route key={index} path={route.path} element={<route.main />} />
                )
              )}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
