import { STORAGE_KEYS } from "../constants/storageKeys";

const delay = (ms = 300) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const getUsers = () => {
  const users = localStorage.getItem(STORAGE_KEYS.USERS);

  return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
};

export const registerUser = async ({ name, login, password }) => {
  await delay();

  const users = getUsers();
  const existingUser = users.find((user) => user.login === login);

  if (existingUser) {
    throw new Error("Пользователь с таким логином уже существует");
  }

  const newUser = {
    id: Date.now(),
    name,
    login,
    password,
  };

  saveUsers([...users, newUser]);

  return {
    id: newUser.id,
    name: newUser.name,
    login: newUser.login,
  };
};

export const loginUser = async ({ login, password }) => {
  await delay();

  const users = getUsers();
  const user = users.find(
    (item) => item.login === login && item.password === password
  );

  if (!user) {
    throw new Error("Неверный логин или пароль");
  }

  const token = `fake-token-${user.id}-${Date.now()}`;

  localStorage.setItem(STORAGE_KEYS.TOKEN, token);
  localStorage.setItem(
    STORAGE_KEYS.CURRENT_USER,
    JSON.stringify({
      id: user.id,
      name: user.name,
      login: user.login,
    })
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      login: user.login,
    },
  };
};

export const logoutUser = () => {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
};

export const getToken = () => {
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
};

export const getCurrentUser = () => {
  const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);

  return user ? JSON.parse(user) : null;
};
