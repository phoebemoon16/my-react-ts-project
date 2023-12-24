import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./index";

// state持久化
const initialState = {
  user:  localStorage.getItem('isAuth') || null
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return Object.assign({}, state, { user: action.payload });
    }
  }
});


export const { setUser } = slice.actions

// 记住使用之前 要先在store里面先注册一下 auth 否则无法获取
export const isAuthSelector = (state: RootState) => state.auth.user !== null;

export default slice.reducer;