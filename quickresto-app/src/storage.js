import { TEST_USER } from './variables';

export const saveUser = (login, password) => {
  localStorage.setItem(login, JSON.stringify(password));
};

export const getUser = () => {
  if (localStorage.getItem(TEST_USER.login)) {
    return JSON.parse(localStorage.getItem(TEST_USER.login));
  }
};

export const hasUser = () => {
  if (localStorage.getItem(TEST_USER.login)) {
    return true;
  }
  return false;
};

export const removeUser = () => {
  if (localStorage.getItem(TEST_USER.login)) {
    localStorage.removeItem(TEST_USER.login);
  }
};

export const saveClientsData = (data) => {
  localStorage.setItem('clientsData', JSON.stringify(data));
};

export const getClientsData = () => {
  if (localStorage.getItem('clientsData')) {
    return JSON.parse(localStorage.getItem('clientsData'));
  }
};

export const hasCLientData = () => {
  if (localStorage.getItem('clientsData')) {
    return true;
  }
  return false;
};
