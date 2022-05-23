/*
 * @Author: wanghh
 * @Date: 2022-05-23 11:25:18
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-23 18:12:13
 * @Description:
 */
import React, { useState } from 'react'
import './chat.css'
// import style from './chat.less'
import { Input } from 'antd'

const { TextArea } = Input

function WeChat() {
  const chatArr = useState([{ context: '', name: '' }])
  return (
    <div>
      <h4 className="title">wechat 聊天框</h4>
      {/* 展示的聊天信息 */}
      <TextArea className="text-area" rows={4} placeholder="请输入内容" maxLength={6} />
      <TextArea className="text-area" rows={4} placeholder="请输入内容" maxLength={6} />
    </div>
  )
}

export default WeChat
