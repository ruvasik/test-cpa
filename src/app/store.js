import { configureStore } from '@reduxjs/toolkit';
import newsReducer from '../pages/News/newsSlice';
import loginReducer from '../pages/Login/loginSlice';

export default configureStore({
  reducer: {
    news: newsReducer,
    login: loginReducer,
  },
});
