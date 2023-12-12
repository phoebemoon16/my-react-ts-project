/*
 * @Author: wanghh
 * @Date: 2021-12-14 10:59:12
 * @LastEditors: wanghh
 * @LastEditTime: 2022-08-01 17:30:31
 * @Description: 联系接口ts的使用
 */
import React, { useEffect, useState, Suspense } from 'react'
import { Button } from 'antd'
import { MyContext, form } from '../../context/formContext'

const InitForm = React.lazy(() => import('../../components/BasicForm'))
interface Status {
  isOnline: null
}

interface Props {
  name: string
  isOnline: boolean
  friend?: {
    id: number
    name: string
  }
}

interface ListProps {
  name: string
  index?: number
}
function useFriendStatus(props: Props) {
  const [isOnline, setIsOnline] = useState(false)
  useEffect(() => {
    setIsOnline(props.isOnline)
  })

  return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.name}</li>
}

function renderList(props: ListProps) {
  return (
    <li>
      {props.name} ---- {props.index}
    </li>
  )
}
function Demo() {
  const [count, setCount] = useState(0)
  const [effCount, setEffCount] = useState('')
  useEffect(() => {
    setEffCount(`${count} 点击了多少次`)
  }, [count])

  const [obj, setObj] = useState({ name: '00000useHook', isOnline: true })
  const [obj2, setObj2] = useState({ name: '11111useHook', isOnline: false })
  const isRecipientOnline = useFriendStatus(obj)
  const isRecipientOnline2 = useFriendStatus(obj2)

  const [arr, setArr] = useState([{ name: '00' }, { name: '11' }, { name: '333' }, { name: '44' }])

  return (
    <div>
      <h5>useEffect HOOK</h5>
      <h5>{effCount}</h5>
      {isRecipientOnline}
      {isRecipientOnline2}

      {/* 采用其他函数进行渲染 */}
      <ul>{arr.map(item => renderList(item))}</ul>

      {/* 普通数组渲染 */}
      {arr.map(item => (
        <li>{item.name}</li>
      ))}

      {renderList(obj)}
      <Button onClick={() => setCount(count + 1)}>count + 1</Button>
      {/* <Button onClick={() => handleStatusChange({ isOnline: true })}>触发hook上的函数</Button> */}

      <MyContext.Provider value={form}>
        <Suspense fallback={<div>Loading...</div>}>
          <InitForm></InitForm>
        </Suspense>
      </MyContext.Provider>
    </div>
  )
}
export default Demo
