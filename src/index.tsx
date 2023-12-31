/*
 * @Author: wanghh
 * @Date: 2022-05-24 11:39:15
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-24 11:52:00
 * @Description:
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  // 将react和store连接起来， 否则无法使用
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
