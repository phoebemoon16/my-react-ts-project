/*
 * @Author: wanghh
 * @Date: 2022-05-25 11:10:21
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-25 11:40:32
 * @Description:
 */
import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'counter',
  initialState: {
    color: 'blue'
  },
  reducers: {
    changeColor: (state, action) => {
      state.color = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeColor } = themeSlice.actions

export default themeSlice.reducer
