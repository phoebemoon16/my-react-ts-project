/*
 * @Author: wanghh
 * @Date: 2022-02-21 14:48:55
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-19 11:21:47
 * @Description: 
 */
import React, { useEffect, useState } from 'react';



function Example() {
  // 声明一个叫 “count” 的 state 变量。 
  /* 面试题：useState返回的是数组而不是对象
  * 用到了解构赋值 数组结构赋值： 
  * const [a,b] = foo 在多次使用情况下比 对象赋值会方便很多
  * 总结：useState 返回的是 array 而不是 object 的原因就是为了降低使用的复杂度，
  * 返回数组的话可以直接根据顺序解构，而返回对象的话要想使用多次就需要定义别名了。
  */
  // useState: 第一个参数为变量 第二个参数为函数 如果有需求可以同时声明多个state变量
  const [count, setCount] = useState(0); // hook
  // const [age, setAge] = useState(42);

    /* 面试题：useEffect 与 useLayoutEffect 的区别
  *  1.两个都是处理副作用的,这个副作用包括了改变DOM 设置订阅 操作定时器等 
    函数组件内部是不容许操作副作用的 所以需要这两个函数去处理
    useState设置状态的时候只有第一次生效 后期需要更新状态，必须通过useEffect
    useEffect也是清除的 和 无需清除的 需要清除的则是需要返回一个函数的 
  */
  useEffect(() =>{
    // setCount(count+2) 生效
    document.title = `you clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example