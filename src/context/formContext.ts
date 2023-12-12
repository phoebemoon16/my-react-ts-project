/*
 * @Author: wanghh
 * @Date: 2022-08-01 17:01:45
 * @LastEditors: wanghh
 * @LastEditTime: 2022-11-14 15:18:36
 * @Description:
 */
import { createContext } from 'react'

interface options {
  label: string
  value: string | number
}

interface Form {
  label: string
  model: string
  widget?: string
  options?: options[]
}

export const form: Form[] = [
  { label: '公司23', model: 'company_id', widget: 'select' },
  { label: '流程类别', model: 'flow_category_id_arr', widget: 'cascader', options: [] },
  { label: '创建日期', model: 'rangeTime', widget: 'range' },
  { label: '流程名称', model: 'flow_name', widget: 'input' }
]

export const MyContext = createContext(form)
