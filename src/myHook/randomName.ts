/*
 * @Author: wanghh
 * @Date: 2022-05-26 09:23:00
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-26 09:25:57
 * @Description:
 */
import react, { useState } from 'react'

function randomName() {
  return Math.random() + ''
}
export const useName = () => {
  const [name, setName] = useState(() => randomName())

  return {
    name,
    setName
  }
}
