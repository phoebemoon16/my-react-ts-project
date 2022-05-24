/*
 * @Author: wanghh
 * @Date: 2022-05-24 10:11:08
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-24 11:47:34
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
