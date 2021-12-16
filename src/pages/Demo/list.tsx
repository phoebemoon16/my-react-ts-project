/*
 * @Author: wanghh
 * @Date: 2021-12-16 17:15:08
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-16 18:30:42
 * @Description: 
 */
import React from "react"

class LoginControal extends React.Component {
    

    handleLoginClick(){
        this.setState({isLogin: true})
    }

    handleLogOutClick(){
        this.setState({isLogin: false})
    }

    render() {
        return (
            <div></div>
        )
        
    }
}
const list = () => {
    return (
        <div> list <LoginControal /></div>
    )
}
export default list