/*
 * @Author: wanghh
 * @Date: 2021-12-09 18:15:54
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 18:12:22
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
const { Header, Content, Sider } = Layout;
  

function layout (){
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
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">
              <Link to="/demo1"></Link>demo1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
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
         {/* <Routes>{
        routes.map((route,index) => (
          <Route key={index} path={route.path} element={<route.main />} />
        ))
        } 
    </Routes> */}
        </Content>
      </Layout>
    </Layout>
  </Layout>
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