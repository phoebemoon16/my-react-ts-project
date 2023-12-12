/*
 * @Author: wanghh
 * @Date: 2022-08-01 16:50:48
 * @LastEditors: wanghh
 * @LastEditTime: 2022-08-04 16:12:01
 * @Description: 基本表单配置 传入的格式为：
 * [
  { label: '公司', model: 'company_id', widget: 'department', type: 1 },
  { label: '流程类别', model: 'flow_category_id_arr', widget: 'cascader', options: [] },
  { label: '创建日期', model: 'rangeTime', widget: 'range' }, 
  { label: '流程名称', model: 'flow_name' } 没有设置widget的就是默认input框
 *]
 */

import { ElementType, HTMLAttributes, FC } from 'react'
import React, { useContext } from 'react'
import { MyContext } from '../context/formContext'
import { Col, Form, Input, Radio } from 'antd'

const { TextArea } = Input

interface options {
  label: string
  value: string | number
}

interface Form {
  label: String
  model: String
  widget?: String
  options?: options[]
}

interface ComponentProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType
}

function renderSearchItem(item: Form) {
  // const type = {
  //   input: 'Input',
  //   textarea: 'TextArea',
  //   radio: 'Radio',
  //   select: 'Select',
  //   date: 'DatePicker',
  //   cascader: 'Cascader '
  // }
  let tip = ''
  if (item.widget === 'select' || item.widget === 'radio' || item.widget === 'department' || item.widget === 'cascader') {
    tip = '请选择'
  } else if (item.widget === 'date' || item.widget === 'week') {
    tip = '请选择时间'
  } else if (item.widget === 'range') {
    tip = ''
  } else {
    tip = '请输入'
  }
  let props = {
    placeholder: tip,
    options: item.options,
    // mode: item.mode,
    // type: item.type,
    // mode: item.mode || 'singal',
    allowClear: true, // 选择清除
    maxTagCount: 2 // 选择多选的情况最多展示2个tag
  }
  // const Field = 'Input'
  //   怎么实现根据动态type去渲染不同组件呢？ 暂时还未知
  // https://www.aleksandrhovhannisyan.com/blog/dynamic-tag-name-props-in-react/
  // const FormComponent: FC<ComponentProps> = ({ as: Tag = 'h1' }) => {
  //   return <Tag />
  // }
  // return FormComponent
  return (
    <div>
      {/* {{ FormComponent }} */}
      <Input {...{ props }}></Input>
    </div>
  )
}

function BasicRender() {
  const form = useContext(MyContext)
  return (
    <div>
      自定义属性
      {form.map((item, index) => (
        <Col md={6} sm={24} key={item.model}>
          <Form.Item key={item.model} colon={false} label={item.label} labelAlign="right">
            {renderSearchItem(item)}
          </Form.Item>
        </Col>
      ))}
    </div>
  )
}

export default BasicRender
