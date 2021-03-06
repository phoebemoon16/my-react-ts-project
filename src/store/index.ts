/*
 * @Author: wanghh
 * @Date: 2022-05-24 10:11:08
 * @LastEditors: wanghh
 * @LastEditTime: 2022-05-25 14:19:11
 * @Description:
 */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import themeReducer from './themeSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  }
})

const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
