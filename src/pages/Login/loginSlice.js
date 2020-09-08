import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isAuth: sessionStorage.getItem("isAuth")
  },
  reducers: {
    auth: (state, action) => {
      const isAuth = action.payload.login === 'Admin' && action.payload.password === '12345';

      if (isAuth)
        sessionStorage.setItem("isAuth", "ok");

      state.isAuth = isAuth;
    },
  },
});

export const { auth } = loginSlice.actions;

export const selectIsAuth = state => state.login.isAuth;

export default loginSlice.reducer;
