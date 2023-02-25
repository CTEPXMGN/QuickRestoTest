import './auth_form.css';
import { useState } from 'react';
import { saveUser } from '../../storage';
import { TEST_USER } from '../../variables';

const checkUser = (loginValue, passwordValue) => {
  return loginValue === TEST_USER.login && passwordValue === TEST_USER.password;
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

  return (
    <div className="auth_container">
      <p>Авторизация</p>
      <form
        action="submit"
        onSubmit={() => {
          authSubmit();
          setIsAuth(isAuth ? true : false);
        }}
      >
        <input
          type="text"
          className="auth_input-login"
          placeholder="логин"
          onChange={(event) => {
            changeLoginValue(event);
          }}
        />
        <input
          type="password"
          className="auth_input-password"
          placeholder="пароль"
          onChange={(event) => {
            changePasswordValue(event);
          }}
        />
        <button className="auth_button">Войти</button>
      </form>
    </div>
  );
};

export default AuthForm;
