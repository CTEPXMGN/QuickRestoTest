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
      alert('Логин или пароль введены неверно.');
    }
  }

  function handlerSubmitLogin() {
    return authSubmit(), setIsAuth(isAuth ? true : false);
  }

  return (
    <div className="auth_container">
      <p>Авторизация</p>
      <form action="submit" onSubmit={handlerSubmitLogin}>
        <input
          type="text"
          className="auth_input-login"
          placeholder="логин"
          onChange={changeLoginValue}
        />
        <input
          type="password"
          className="auth_input-password"
          placeholder="пароль"
          onChange={changePasswordValue}
        />
        <button className="auth_button">Войти</button>
      </form>
    </div>
  );
};

export default AuthForm;
