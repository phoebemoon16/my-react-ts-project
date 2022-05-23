/*
 * @Author: wanghh
 * @Date: 2022-05-20 09:00:48
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-20 11:50:13
 * @Description:
 */
import React, { useContext } from 'react'
import { MyContext } from './MyContext'

function Son() {
  const theme = useContext(MyContext)
  console.log(theme, useContext(MyContext), 'theme9090')
  return (
    <div>
      <p>
        我是孙子组件 {theme.background} {theme.foreground}
      </p>
    </div>
  )
}

export default Son
