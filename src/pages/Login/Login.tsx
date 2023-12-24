/*
 * @Author: wanghh
 * @Date: 2021-12-14 08:43:32
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-14 10:53:07
 * @Description: 
 */
import React,{ useState }  from 'react';
import { Form, Input, Button } from 'antd'
import './login.less'
import logo from '../../logo.svg';
import { useDispatch, } from 'react-redux'
import type { AppDispatch } from '../../store' 
import { setUser  } from '../../store/authSlice'
import { useNavigate} from 'react-router-dom' 

interface UserLayoutState {
    isError: boolean;
}


function UserLayout() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>()

  const navigate = useNavigate();

  function handleSubmit(){
    dispatch(setUser({usernam: username, password: password}))
    localStorage.setItem('isAuth', 'true');
    navigate({
      pathname: "/weChat/",
  });
  }

  const  FormView = () => { 
      return (
        <Form className="login-form" name="login-form">
          <Form.Item
            name="userName"

            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="用户名" size="large"  value={username}
            onChange={e => setUsername(e.target.value)}/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
            extra="用户名：admin 密码：123456"
          >
            <Input.Password
              value={password}
              onChange={e => setPassword(e.target.value)}
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
              onClick={ ()=>handleSubmit()}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      )
      } 
    return (
        <div className="login-layout" id="login-layout">
            <h1 className='header'>login 页面</h1>
            <div className="logo-box" style={{width:'200px'}}>
            <img alt="" className="logo" src={logo} />
            </div>
            {/* 记住返回一个组件 而不是一个函数 需要执行一下 */}
            { FormView() } 
            {/* <FormView /> */}
        </div>
    )
}

export default UserLayout