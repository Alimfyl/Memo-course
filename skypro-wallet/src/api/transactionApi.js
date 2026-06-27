import { STORAGE_KEYS } from "../constants/storageKeys";

const DEFAULT_TRANSACTIONS = [
  {
    id: 1,
    title: "Пятерочка",
    category: "Еда",
    date: "03.07.2024",
    amount: 3500,
  },
  {
    id: 2,
    title: "Яндекс Такси",
    category: "Транспорт",
    date: "03.07.2024",
    amount: 730,
  },
  {
    id: 3,
    title: "Аптека Вита",
    category: "Другое",
    date: "03.07.2024",
    amount: 1200,
  },
  {
    id: 4,
    title: "Бургер Кинг",
    category: "Еда",
    date: "03.07.2024",
    amount: 950,
  },
];

const delay = (ms = 300) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const getStorageTransactions = () => {
  const data = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);

  if (!data) {
    localStorage.setItem(
      STORAGE_KEYS.TRANSACTIONS,
      JSON.stringify(DEFAULT_TRANSACTIONS)
    );

    return DEFAULT_TRANSACTIONS;
  }

  return JSON.parse(data);
};

const saveTransactions = (transactions) => {
  localStorage.setItem(
    STORAGE_KEYS.TRANSACTIONS,
    JSON.stringify(transactions)
  );
};

export const getTransactions = async () => {
  await delay();

  return getStorageTransactions();
};

export const addTransaction = async (transaction) => {
  await delay();

  const transactions = getStorageTransactions();

  const newTransaction = {
    id: Date.now(),
    ...transaction,
  };

  const updatedTransactions = [
    newTransaction,
    ...transactions,
  ];

  saveTransactions(updatedTransactions);

  return newTransaction;
};

export const deleteTransaction = async (id) => {
  await delay();

  const transactions = getStorageTransactions();

  const updatedTransactions = transactions.filter(
    (transaction) => transaction.id !== id
  );

  saveTransactions(updatedTransactions);

  return id;
};
