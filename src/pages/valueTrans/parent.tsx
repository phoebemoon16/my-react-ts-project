/*
 * @Author: wanghh
 * @Date: 2022-05-20 08:53:16
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-20 14:04:52
 * @Description:
 */
import React, { Suspense, useState } from 'react'
// import Children from './children'
import { MyContext } from './MyContext'

const Children = React.lazy(() => import('./children'))

// index签名 只限制类型 不去限制属性数量

function Example() {
  // Declare a new state variable, which we'll call "count"
  //   const [count, setCount] = useState(0)
  let [value, setValue] = useState('')
  const [theme, setTheme] = useState('dark')

  let [parentTheme, setParentTheme] = useState({
    foreground: 'red',
    background: '#ccc'
  })
  function handleChange(value: string) {
    console.log(value, 'valuevalue')
    setValue(value)
  }
  return (
    <div>
      <p> 我是父元素 {value}</p>
      <MyContext.Provider value={parentTheme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Children name="hahaha" callbackParent={handleChange} />
        </Suspense>
      </MyContext.Provider>
    </div>
  )
}

export default Example
