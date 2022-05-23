/*
 * @Author: wanghh
 * @Date: 2022-05-20 11:29:37
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-23 16:05:52
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
  },
  dark: {
    foreground: '#ccc',
    background: '#eeeeee'
  }
}

export const MyContext = createContext(themes.light)
