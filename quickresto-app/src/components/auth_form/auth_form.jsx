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
  const [userValid, setUserValid] = useState(false);

  function changeLoginValue(event) {
    setLoginValue(event.target.value);
  }

  function changePasswordValue(event) {
    setPasswordValue(event.target.value);
  }

  function authSubmit() {
    if (checkUser(loginValue, passwordValue)) {
      saveUser(loginValue, passwordValue);
    } else {
      setUserValid(true);
    }
  }

  function handlerSubmitLogin() {
    return authSubmit(), setIsAuth(isAuth ? true : false);
  }

  return (
    <div className="auth__container">
      <h3 className="auth__title">Авторизация</h3>
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
