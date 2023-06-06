import './auth_form.css';
import md5 from 'js-md5';
import { useState } from 'react';
import { saveUser } from '../../storage';
import { TEST_USER } from '../../variables';

const checkUser = (loginValue, passwordValue) => {
  const passwordValueHash = md5(passwordValue);

  return (
    loginValue === TEST_USER.login && passwordValueHash === TEST_USER.password
  );
};

const AuthForm = ({ isAuth, setIsAuth }) => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  // РЕВЬЮ: вопрос к неймингу, user valid переводится, как пользователь валидный,
  // однако, здесь эта переменная используется в противоположном смысле
  const [userValid, setUserValid] = useState(false);

  function changeLoginValue(event) {
    setLoginValue(event.target.value);
  }

  function changePasswordValue(event) {
    setPasswordValue(event.target.value);
  }

  // РЕВЬЮ: по неймингу, функция должна называться так, чтобы сторонний человек из названия понял,
  // что она делает, в нашем случае не сильно понятно, что она авторизует, при этом,
  // внутри она не авторизует, грубо говоря, а сохраняет ползователя в localStorage.
  // Да и нужна ли эта функция, если она вызывается один раз в handlerSubmitLogin?
  function authSubmit() {
    if (checkUser(loginValue, passwordValue)) {
      saveUser(loginValue, passwordValue);
    } else {
      setUserValid(true);
    }
  }

  // РЕВЬЮ: судя по телу функции, она должна что-то возвращать, но при этом не возвращает,
  // нужен ли return, или же можно обойтись без него?
  function handlerSubmitLogin() {
    // РЕВЬЮ: можно ли как-то упростить setIsAuth?
    return authSubmit(), setIsAuth(isAuth ? true : false);
  }

  return (
    <div className="auth__container">
      <h3 className="auth__title">Авторизация</h3>
      {/* РЕВЬЮ: на onSubmit срабатывает рестарт приложения, соответственно, компонент "Неверный логин или пароль" отображается пол секунды*/}
      <form action="submit" onSubmit={handlerSubmitLogin}>
        <input
          type="text"
          className="auth__input-login"
          placeholder="логин"
          onChange={changeLoginValue}
        />
        <input
          type="password"
          className="auth__input-password"
          placeholder="пароль"
          onChange={changePasswordValue}
        />
        {/* РЕВЬЮ: можно ли как-то иначе рендерить условно, не передавая пустой фрагмент?*/}
        {userValid ? (
          <p className="auth__message">Неверный логин или пароль</p>
        ) : (
          <></>
        )}
        <button className="auth__button">Войти</button>
      </form>
    </div>
  );
};

export default AuthForm;
