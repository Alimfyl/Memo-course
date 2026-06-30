import { getToken } from "./authApi";

const API_URL = "https://wedev-api.sky.pro/api";

const CATEGORY_TO_API = {
  Еда: "food",
  Транспорт: "transport",
  Жилье: "housing",
  Развлечения: "joy",
  Образование: "education",
  Другое: "others",
};

const CATEGORY_FROM_API = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};

const request = async (path, options = {}) => {
  const token = getToken();

  if (!token) {
    throw new Error("Необходимо войти в аккаунт");
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || data.message || "Ошибка запроса");
  }

  return data;
};

const formatDateFromApi = (date) => {
  const parsedDate = new Date(date);
  const day = String(parsedDate.getUTCDate()).padStart(2, "0");
  const month = String(parsedDate.getUTCMonth() + 1).padStart(2, "0");
  const year = parsedDate.getUTCFullYear();

  return `${day}.${month}.${year}`;
};

const formatDateToApi = (date) => {
  const [day, month, year] = date.split(".");

  return `${month}-${day}-${year}`;
};

const normalizeTransaction = (transaction) => ({
  id: transaction._id,
  title: transaction.description,
  category: CATEGORY_FROM_API[transaction.category] || transaction.category,
  categoryCode: transaction.category,
  date: formatDateFromApi(transaction.date),
  amount: Number(transaction.sum),
});

const normalizeTransactions = (transactions) => {
  return transactions.map(normalizeTransaction);
};

export const getTransactions = async (params = {}) => {
  const searchParams = new URLSearchParams();

  if (params.sortBy) {
    searchParams.set("sortBy", params.sortBy);
  }

  if (params.filterBy?.length) {
    searchParams.set("filterBy", params.filterBy.join(","));
  }

  const query = searchParams.toString();
  const transactions = await request(`/transactions${query ? `?${query}` : ""}`);

  return normalizeTransactions(transactions);
};

export const getTransactionsByPeriod = async ({ start, end }) => {
  const transactions = await request("/transactions/period", {
    method: "POST",
    body: JSON.stringify({
      start: formatDateToApi(start),
      end: formatDateToApi(end),
    }),
  });

  return normalizeTransactions(transactions);
};

export const addTransaction = async (transaction) => {
  const data = await request("/transactions", {
    method: "POST",
    body: JSON.stringify({
      description: transaction.title,
      sum: Number(transaction.amount),
      category: CATEGORY_TO_API[transaction.category],
      date: formatDateToApi(transaction.date),
    }),
  });

  return normalizeTransactions(data.transactions);
};

export const deleteTransaction = async (id) => {
  const data = await request(`/transactions/${id}`, {
    method: "DELETE",
  });

  return normalizeTransactions(data.transactions);
};
