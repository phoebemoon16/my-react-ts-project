/*
 * @Author: wanghh
 * @Date: 2022-05-23 11:25:18
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-25 14:10:39
 * @Description:
 */
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import './chat.scss'
// import style from './chat.less'
import { Input } from 'antd'

const { TextArea } = Input

function WeChat() {
  const [chatArr, setChatArr] = useState([{ context1: '', context2: '' }])
  const [text1, setText1] = useState<string>('')
  const [text2, setText2] = useState<string>('')
  useEffect(() => {
    console.log(`${chatArr} count`)
  })

  const onHandleChange: React.ChangeEventHandler<HTMLTextAreaElement> = e => {
    setText1(e.currentTarget.value)
  }

  interface Content {
    context1: string
    context2: string
  }
  function handleSubmit(type?: string) {
    let arr: Content[] = []
    if (type === 'me') {
      arr = chatArr.concat({
        context1: '',
        context2: text2
      })
    } else if (type === 'you') {
      arr = chatArr.concat({
        context1: text1,
        context2: ''
      })
    } else {
      arr = chatArr.concat({
        context1: text1,
        context2: text2
      })
    }
    setChatArr(arr)
  }

  const handleSet = () => {
    setChatArr([])
    setText1('')
    setText2('')
  }
  return (
    <div className="Main">
      <h4 className="title">wechat 聊天框</h4>
      {/* 展示的聊天信息 */}
      <div className="top-10 layoutFlex">
        <div className="left">
          <p>You</p>
          <TextArea
            value={text1}
            onChange={onHandleChange}
            onPressEnter={() => handleSubmit('you')}
            className="text-area"
            rows={4}
            placeholder="请输入内容"
          />
        </div>
        <div className="right">
          <p>Me</p>
          <TextArea
            value={text2}
            onChange={e => {
              setText2(e.currentTarget.value)
            }}
            onPressEnter={() => handleSubmit('me')}
            className="text-area"
            rows={4}
            placeholder="请输入内容"
          />
        </div>
      </div>
      <Button className="top-10" onClick={() => handleSubmit()}>
        提交
      </Button>
      <Button className="top-10 floatRight" onClick={handleSet}>
        清空聊天记录
      </Button>
      <ul className="content">
        {chatArr.map((item, index) => (
          <div key={index}>
            <p> {item.context1}</p>
            <p className="floatRight"> {item.context2}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default WeChat
