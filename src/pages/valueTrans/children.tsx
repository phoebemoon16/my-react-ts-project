/*
 * @Author: wanghh
 * @Date: 2022-05-20 09:00:41
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-20 10:34:13
 * @Description:
 */
import React, { Suspense } from 'react'
import { Button } from 'antd'

const Son = React.lazy(() => import('./son'))

interface Props {
  name: string
  callbackParent: (value: string) => void
}
function Children(props: Props) {
  // Declare a new state variable, which we'll call "count"
  //   const [count, setCount] = useState(0)
  return (
    <div>
      <p>我是子元素 从父元素传来的值 --- 》 {props.name}</p>
      <Button type="primary" onClick={() => props.callbackParent('children传过去的值22')}>
        Primary Button
      </Button>
      <Suspense fallback={<div>Loading...</div>}>
        <Son />
      </Suspense>
    </div>
  )
}

export default Children
