import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {auth, selectIsAuth} from './loginSlice';
import {Redirect} from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();

  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');

  const isAuth = useSelector(selectIsAuth);

  const handleLogin = (e) => {
    setLogin(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const sendForm = (e) => {
    e.preventDefault();

    dispatch(auth({ login, password }));
  }

  return (
    isAuth
      ? <Redirect to="/profile" />
      : <div>
      <h2>Пройдите авторизацию</h2>

      { isAuth === false && <h4>Имя пользователя или пароль введены не верно</h4> }

      <form className="App-form" onSubmit={sendForm}>
        <div>
          <input
            type="text"
            placeholder="Логин"
            required
            spellcheck="false"
            autocorrect="off"
            onChange={handleLogin}
          />
        </div>
        <br/>
        <div>
          <input
            type="password"
            placeholder="Пароль"
            required
            onChange={handlePassword}
          />
        </div>
        <br/>
        <input type="submit" value="Отправить" />
      </form>
    </div>
  );
}
