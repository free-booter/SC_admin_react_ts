import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo') as string)
      : {}
  },
  reducers: {
    saveUserInfo(state, { payload }: PayloadAction<any>) {
      state.userInfo = payload
      // 将token存入localStorage
      localStorage.setItem('userInfo', JSON.stringify(payload))
    }
  }
})

export const { saveUserInfo } = userSlice.actions
export default userSlice.reducer
