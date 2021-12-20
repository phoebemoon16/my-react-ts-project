/*
 * @Author: wanghh
 * @Date: 2021-12-16 17:15:08
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-20 18:19:50
 * @Description: 
 */
import React from "react"
import { Button } from 'antd';

interface State {
    date?: any;
    isLoggedIn?: any

}

const numbers = [1,2,3,4,5]


const listItems = numbers.map((number,index) =>
<li key={index}>{number}</li>
);
class LoginControal extends React.Component {
    state: State;

    constructor(props: State) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this)
        this.handleLogOutClick = this.handleLogOutClick.bind(this)
        this.state = { isLoggedIn: false}
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true})
    }   

    handleLogOutClick(){
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn
        let button;
        if(isLoggedIn){
            button = <Button onClick={this.handleLogOutClick}>登出</Button>
        } else {
            button =  <Button onClick={this.handleLoginClick}>登入</Button>
        }
        return (
            <div>
                <h5>条件渲染</h5>
                {button}
                {isLoggedIn ? <Button onClick={this.handleLogOutClick}>登出三元运算符</Button> : <Button onClick={this.handleLoginClick}>登入三元运算符</Button>}
                {listItems}
            </div>  
        )
        
    }
}


const numbersTwo = [1,3,5,7,9]
interface numberProps {
    numbers: Array<number>
}
function NumberList(props: numberProps) {
    const numbers = props.numbers
    const listItems = numbers.map(numberItem => <li key={numberItem}> {numberItem}</li>)
    return (<ul>{listItems}</ul>)
}
const list = () => {
    return (
        <div> list <LoginControal />
        <NumberList numbers={numbersTwo}></NumberList></div>
    )
}
export default list