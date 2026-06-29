import { STORAGE_KEYS } from "../constants/storageKeys";

const API_URL = "https://wedev-api.sky.pro/api";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Ошибка запроса");
  }

  return data;
};

const saveAuthData = (user) => {
  localStorage.setItem(STORAGE_KEYS.TOKEN, user.token);
  localStorage.setItem(
    STORAGE_KEYS.CURRENT_USER,
    JSON.stringify({
      id: user.id || user._id,
      name: user.name,
      login: user.login,
    })
  );
};

export const registerUser = async ({ name, login, password }) => {
  const data = await request("/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });

  saveAuthData(data.user);

  return data.user;
};

export const loginUser = async ({ login, password }) => {
  const data = await request("/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  saveAuthData(data.user);

  return data.user;
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
