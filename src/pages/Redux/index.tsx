/*
 * @Author: wanghh
 * @Date: 2022-05-23 11:25:18
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-25 14:15:55
 * @Description:
 */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch, Provider } from 'react-redux'
import { decrement, increment } from '../../store/counterSlice'
import { changeColor } from '../../store/themeSlice'
import type { AppDispatch, RootState } from '../../store' // 传入类型
import { Button } from 'antd'
import './index.scss'
function WeChat() {
  const count = useSelector((state: RootState) => state.counter.value)
  const color = useSelector((state: RootState) => state.theme.color)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="Main">
      <h4 className="title">redux学习</h4>
      <p>
        counterSlice:{count} <span className="left-10">themeSlice:{color}</span>
      </p>
      <Button className="left-10" onClick={() => dispatch(increment())}>
        触发store的加事件
      </Button>
      <Button className="left-10" onClick={() => dispatch(decrement())}>
        触发store的减事件
      </Button>
      <Button className="left-10" onClick={() => dispatch(changeColor('green'))}>
        触发修改颜色
      </Button>
    </div>
  )
}

export default WeChat
