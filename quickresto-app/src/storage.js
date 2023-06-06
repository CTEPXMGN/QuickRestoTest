import { TEST_USER } from './variables';

const CLIENTS_DATA = 'clientsData';

// РЕВЬЮ: Что произойдет, если попытаемся засетить password, не оборачивая в JSON.stringify?
export const saveUser = (login, password) => {
  localStorage.setItem(login, JSON.stringify(password));
};

// РЕВЬЮ: функция нигде не используется
export const getUser = () => {
  if (localStorage.getItem(TEST_USER.login)) {
    return JSON.parse(localStorage.getItem(TEST_USER.login));
  }
};

// РЕВЬЮ: можно ли это как-то упростить?
export const hasUser = () => {
  if (localStorage.getItem(TEST_USER.login)) {
    return true;
  }
  return false;
};

export const removeUser = () => {
  // РЕВЬЮ: что произойдет без этой проверки?
  if (localStorage.getItem(TEST_USER.login)) {
    localStorage.removeItem(TEST_USER.login);
  }
};

export const saveClientsData = (data) => {
  localStorage.setItem(CLIENTS_DATA, JSON.stringify(data));
};

export const getClientsData = () => {
  // РЕВЬЮ: что произойдет без этой проверки?
  if (localStorage.getItem(CLIENTS_DATA)) {
    return JSON.parse(localStorage.getItem(CLIENTS_DATA));
  }
};

// РЕВЬЮ: Если нейминг функции по принципу camel case, то для каждого слова большой буквой пишется только первая
export const hasCLientData = () => {
  // РЕВЬЮ: можно ли это как-то упростить?
  if (localStorage.getItem(CLIENTS_DATA)) {
    return true;
  }
  return false;
};
