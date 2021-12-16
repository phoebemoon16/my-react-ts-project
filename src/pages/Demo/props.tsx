/*
 * @Author: wanghh
 * @Date: 2021-12-15 15:49:28
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-16 17:14:49
 * @Description: props 以及 组件 事件 的学习
 */

import React from 'react'
import avatar from '../../assets/avatar.jpg'
import { Button } from 'antd';
import './props.css'

interface AvatarObj {
  user: User
}

interface User {
  name: string
  avatarUrl: string
}

let user = {
    name: 'whh tesst',
    avatarUrl: avatar
}
function Avatar(props: AvatarObj) {
  return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
}

function UserInfo(props: AvatarObj) {
    return(
        <div>
            <Avatar user={props.user}/>
            <div>
                {props.user.name}
            </div>
        </div>
    )
}

interface ClockInter {
    state: State;
    timerID?: any;
    date?: any
}   
interface State {
    date: any
}
class Clock extends React.Component {
    timerID: any;
    state: State;
    constructor(props:ClockInter) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = window.setInterval(
          () => this.tick(),
          1000
        );
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      
      
  tick() {
    this.setState({
      date: new Date()
    });
  }

  handleClick(value: string){
      console.log(value, 'click 909')
  }

    render() {
        return (
            <div>
                <Button  style={{margin: '20px'}} type="primary" onClick={()=>this.handleClick('11')}>测试点击事件</Button>
                time is { this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

setInterval(Comment, 1000);

function Comment() {
  return (
    <div className="Comment">
      <UserInfo user={user} />
      <Clock/>
      <Clock/>
      <Clock/>
    </div>
  )
}
export default Comment
