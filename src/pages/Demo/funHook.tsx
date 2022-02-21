/*
 * @Author: wanghh
 * @Date: 2022-02-21 14:48:55
 * @LastEditors: wanghh
 * @LastEditTime: 2022-02-21 14:59:50
 * @Description: 
 */
import React, { useState } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。 
  /* 面试题：useState使用数组而不是对象
  * 用到了解构赋值 数组结构赋值： 
  * const [a,b] = foo 在多次使用情况下比 对象赋值会方便很多
  */
  const [count, setCount] = useState(0);

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