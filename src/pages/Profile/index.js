import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { selectIsAuth } from '../Login/loginSlice';

export default function Profile() {
  const isAuth = useSelector(selectIsAuth);

  return (
    isAuth
      ? <div>
        <h2>Профиль</h2>

        <h4>Поздравляем! Вы прошли!</h4>
      </div>
      : <Redirect to="/login" />
  );
}
