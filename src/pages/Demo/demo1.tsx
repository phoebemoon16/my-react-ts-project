/*
 * @Author: wanghh
 * @Date: 2021-12-14 10:59:12
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-15 15:42:49
 * @Description: 联系接口ts的使用
 */
import React from 'react';
interface User  {
    firstName?: string;
    lastName?: string
}

const user = {
    firstName: 'WHH',
    lastName: '123'
}

function generName(user: User): string {
    return user.firstName + ' ' + user.lastName;
}

function tick() {
    return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        
        </div>
      )
}

function handletick() {
    setInterval(tick, 1000);
}

class Demo1 extends React.Component  {

    render() {
        return(
            <div>
                {generName(user)}
                <button> 打开 定时器</button>
                {tick()}
                {handletick()}
            </div>
        )
    }
}
export default Demo1