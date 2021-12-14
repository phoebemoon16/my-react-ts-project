/*
 * @Author: wanghh
 * @Date: 2021-12-14 08:43:32
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 10:53:07
 * @Description: 
 */
import React from 'react';
import { Form, Input, Button } from 'antd'
import './login.less'
import logo from '../../logo.svg';

interface UserLayoutState {
    isError: boolean;
}
  

const FormView = (
    <Form className="login-form" name="login-form">
      <Form.Item
        name="userName"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder="用户名" size="large" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
        extra="用户名：admin 密码：123456"
      >
        <Input.Password
          placeholder="密码"
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Button
          className="login-form-button"
          htmlType="submit"
          size="large"
          type="primary"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  )

class UserLayout extends React.PureComponent<any, UserLayoutState> {
    state: UserLayoutState = {
      isError: false,
    };
    render(){
        return (
            <div className="login-layout" id="login-layout">
                <h1 className='header'>login 页面</h1>
                <div className="logo-box" style={{width:'200px'}}>
                <img alt="" className="logo" src={logo} />
                </div>
                { FormView }
            </div>
        )
    }

}
export default UserLayout;