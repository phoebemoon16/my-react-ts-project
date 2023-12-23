/*
 * @Author: wanghh
 * @Date: 2022-02-21 14:48:55
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-26 09:39:45
 * @Description:
 */
import React, { useEffect, useState, useMemo } from 'react'
import { useName } from '../../myHook/randomName'
import { useFormInput } from '../../myHook/useFormInput'
import { useOnlineStatus } from '../../myHook/useOnlineStatus'

import { createSearchParams,useNavigate, useParams, useLocation, useSearchParams} from 'react-router-dom'   

function Example() {
  // 接收路由参数
  const params = useParams()
  console.log(params,'params') // {id: '1'} 'params'

  const location = useLocation();
  const userData = location.state;
  console.log(userData, 'state传递')

  const [searchParam, setSearchParam] = useSearchParams()

  const searchParams = Object.fromEntries([...searchParam]);
  console.log('get all searchParams:', searchParams);
  setSearchParam({sort: 'edit'})
  console.log(searchParam.get('sort'), searchParam.get('order'), searchParam.entries(),'searchaParam')
  
  // 设置路由参数
  const navigate = useNavigate();
  function changeRoute(){
    navigate({
      pathname: "/weChat/",
      search: createSearchParams({
          foo: "bar"
      }).toString()
  });
  }
  // 声明一个叫 “count” 的 state 变量。
  /* 面试题：useState返回的是数组而不是对象
   * 用到了解构赋值 数组结构赋值：
   * const [a,b] = foo 在多次使用情况下比 对象赋值会方便很多
   * 总结：useState 返回的是 array 而不是 object 的原因就是为了降低使用的复杂度，
   * 返回数组的话可以直接根据顺序解构，而返回对象的话要想使用多次就需要定义别名了。
   */
  // useState: 第一个参数为变量 第二个参数为函数 如果有需求可以同时声明多个state变量
  const [count, setCount] = useState(0) // hook
  // const [age, setAge] = useState(42);

  /* 面试题：useEffect 与 useLayoutEffect 的区别
  *  1.两个都是处理副作用的,这个副作用包括了改变DOM 设置订阅 操作定时器等 
    函数组件内部是不容许操作副作用的 所以需要这两个函数去处理
    useState设置状态的时候只有第一次生效 后期需要更新状态，必须通过useEffect.
    useEffect也是清除的 和 无需清除的 需要清除的则是需要返回一个函数的 
    类似于监听
  */
  useEffect(() => {
    // count改变状态生效
    document.title = `useEffect：you clicked ${count} times`
    console.log(count, 'count000')
  }, [count])

  useEffect(() => {
    // 仅在初始渲染后执行
    document.title = `useEffect：you clicked ${count} times`
    console.log(count, '依赖响应式为空数组')
  }, [])

  useEffect(() => {
    // 会在组件的每次单独渲染和重新渲染之后运行
    document.title = `useEffect：you clicked ${count} times`
    console.log(count, '依赖响应式为null')
  })

  /**
   * 首次渲染 按顺序打印
   * 0 'count000'
     0 '依赖响应式为空数组'
     0 '依赖响应式为null'

     修改state count的值
     1 'count000'
     1 '依赖响应式为null'
   */

  // 随着count的变化 而改变 类似于vue的computed
  const memoCount = useMemo(() => count + 'useMeno', [count])

  const { name, setName } = useName()

  // 将2个公共组件里面的事件抽离出来 封装在useOnlineStatus状态里面

  const isOnline = useOnlineStatus()

  function StatusBar() {
    const isOnline = useOnlineStatus();
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
  }

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  //  抽离双向绑定逻辑 减少逻辑代码重复
  const firstNameProps = useFormInput('mary')
  const secondNameProps = useFormInput('tutu')


  return (
    <div>
       <button onClick={() => changeRoute()}>重定向到chat页面 带上params对象</button>
      <label>
        first name： 
        <input {...firstNameProps}></input>
      </label>
      <label>
        second name： 
        <input {...secondNameProps}></input>
      </label>
      <p>{firstNameProps.value} {secondNameProps.value}</p>
      <button disabled={!isOnline} onClick={handleSaveClick}>
       {isOnline ? 'Save progress' : 'Reconnecting...'}
      </button>
      <StatusBar />
      <p>
        You clicked ，emit useEffect:<span style={{ color: 'red' }}>{count} </span>
        times --- memoCount: <span style={{ color: 'red' }}>{memoCount}</span>
      </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h3>自定义hook</h3>
      {name}
      <button onClick={() => setName('phoebe')}>修改自定义随机name</button>
      <button onClick={() => setName('')}>清除自定义随机name</button>
    </div>
  )
}

export default Example
