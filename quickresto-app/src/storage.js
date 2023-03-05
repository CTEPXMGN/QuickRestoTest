import { TEST_USER } from './variables';

const CLIENTS_DATA = 'clientsData';

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
  localStorage.setItem(CLIENTS_DATA, JSON.stringify(data));
};

export const getClientsData = () => {
  if (localStorage.getItem(CLIENTS_DATA)) {
    return JSON.parse(localStorage.getItem(CLIENTS_DATA));
  }
};

export const hasCLientData = () => {
  if (localStorage.getItem(CLIENTS_DATA)) {
    return true;
  }
  return false;
};
