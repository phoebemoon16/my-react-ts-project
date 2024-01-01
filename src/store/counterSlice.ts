/*
 * @Author: wanghh
 * @Date: 2022-05-24 11:47:06
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-24 11:47:16
 * @Description: 
 */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { resolve } from 'dns'
import { stat } from 'fs'

interface CountState {
  value: number;
}

const initialState: CountState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      /**
       * Redux Toolkit allows us to write "mutating" logic in reducers.
       * store里的state是不能直接被修改的，但是这个代码就直接修改了state? 
       * 这是因为redux的reducers自动做了处理，你可以这样直接修改state（仅在reducer里面），但是切记：state不能直接被修改，只用复制再重写state
       *  */ 

      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    // 携带参数
    incrementByAmount: (state, action:PayloadAction<number>) => {
      state.value += action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(incrementAsync.pending, (state:CountState) => {
      console.log(state,'pending')
    }).addCase(incrementAsync.fulfilled, (state:CountState,action: PayloadAction<number>) => {
      // 1秒后state的值加上参数
      state.value += action.payload
    })
  }
})

// 可以用于刚开始进入页面，触发用户接口等 dispatch异步接口
export const incrementAsync = createAsyncThunk(
  "count/increamentAsync",
  async (amount:number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return amount
  }
)

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
