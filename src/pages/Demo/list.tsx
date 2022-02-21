/*
 * @Author: wanghh
 * @Date: 2021-12-16 17:15:08
 * @LastEditors: wanghh
 * @LastEditTime: 2021-12-24 09:04:01
 * @Description: 
 */
import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

type SizeType = Parameters<typeof Form>[0]['size'];
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
    // 在map较多 复杂的情况下 比较建议第一种类型
    // const listItems = numbers.map(numberItem => <li key={numberItem}> {nusmberItem}</li>)
    // return (<ul>{listItems}</ul>)
    return (
        <ul> {numbers.map((number) => <li key={number.toString()}>{number}</li>)}</ul>
    )
}

const FormSizeDemo = () => {
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
      setComponentSize(size);
    };
    return (
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    );
  };
const list = () => {
    return (
        <div> list <LoginControal />
        <NumberList numbers={numbersTwo}></NumberList>
        <FormSizeDemo></FormSizeDemo>
        </div>
    )
}
export default list