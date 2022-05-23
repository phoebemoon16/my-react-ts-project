/*
 * @Author: wanghh
 * @Date: 2022-05-20 11:29:37
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-20 14:06:36
 * @Description:
 */
import { createContext } from 'react'

interface Theme {
  foreground: string
  background: string
}

interface Themes {
  [index: string]: Theme
}

export const themes: Themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  }
}

export const MyContext = createContext(themes.light)
