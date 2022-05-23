/*
 * @Author: wanghh
 * @Date: 2022-05-20 09:00:48
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-23 16:08:27
 * @Description:
 */
import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function Son() {
  const theme = useContext(MyContext)
  return (
    <div>
      <p>
        我是孙子组件 {theme.background} {theme.foreground}
      </p>
    </div>
  )
}

export default Son
