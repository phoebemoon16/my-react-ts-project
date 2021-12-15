/*
 * @Author: wanghh
 * @Date: 2021-12-15 15:49:28
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-15 16:17:38
 * @Description: props 以及 组件的学习
 */

import avatar from '../../assets/avatar.jpg'
import  './props.css'

interface AvatarObj {
    user: User
}

interface User {
    name: string;
    avatarUrl: string
}
function Avatar(props: AvatarObj) {
 return (
    <img className="Avatar"
    src={props.user.avatarUrl}
    alt={props.user.name}
  />
 )
}

let user = {
    name: 'whh',
    avatarUrl: avatar
}
function Comment() {
    return (
        <div className="Comment">
            <Avatar user={user}/>
        </div>
    )
}
export default Comment