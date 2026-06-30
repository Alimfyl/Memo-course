import { useEffect, useState } from "react";

import {
  getTransactions,
  getTransactionsByPeriod,
} from "../../api/transactionsApi";
import Calendar from "../../components/Calendar/Calendar";
import Chart from "../../components/Chart/Chart";
import Header from "../../components/Header/Header";

import {
  Wrapper,
  Container,
  Title,
  Content,
  Left,
  Right,
} from "./AnalysticsPage.styled";

const monthNames = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const today = new Date();
const currentYear = today.getFullYear();

const getPeriodDayFromDate = (date) => ({
  day: date.getDate(),
  month: monthNames[date.getMonth()],
  monthNumber: date.getMonth(),
  year: date.getFullYear(),
  order: date.getTime(),
});

const getInitialPeriod = () => [getPeriodDayFromDate(today)];

const getPeriodDateText = (periodDay) => {
  const day = String(periodDay.day).padStart(2, "0");
  const month = String(periodDay.monthNumber + 1).padStart(2, "0");

  return `${day}.${month}.${periodDay.year}`;
};

const getDateFromText = (date) => {
  const [day, month, year] = date.split(".").map(Number);

  return new Date(year, month - 1, day);
};

const getDateTime = (date) => {
  return getDateFromText(date).getTime();
};

const filterTransactionsByPeriod = (transactions, firstDay, lastDay) => {
  const startTime = getDateTime(getPeriodDateText(firstDay));
  const endTime = getDateTime(getPeriodDateText(lastDay));

  return transactions.filter((transaction) => {
    const transactionTime = getDateTime(transaction.date);

    return transactionTime >= startTime && transactionTime <= endTime;
  });
};

const getTransactionYear = (transaction) => {
  const year = Number(transaction.date.split(".")[2]);

  return Number.isNaN(year) ? null : year;
};

const getLatestTransactionDate = (transactions) => {
  if (transactions.length === 0) {
    return null;
  }

  return transactions.reduce((latestDate, transaction) => {
    const transactionDate = getDateFromText(transaction.date);

    return transactionDate > latestDate ? transactionDate : latestDate;
  }, getDateFromText(transactions[0].date));
};

function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState(getInitialPeriod);
  const [transactions, setTransactions] = useState([]);
  const [calendarYears, setCalendarYears] = useState({
    startYear: currentYear - 1,
    endYear: currentYear + 1,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCalendarData = async () => {
      try {
        const allTransactions = await getTransactions({ sortBy: "date" });
        const transactionYears = allTransactions
          .map(getTransactionYear)
          .filter((year) => year !== null);
        const latestTransactionDate = getLatestTransactionDate(allTransactions);

        if (transactionYears.length > 0) {
          setCalendarYears({
            startYear: Math.min(...transactionYears, currentYear),
            endYear: Math.max(...transactionYears, currentYear),
          });
        }

        if (latestTransactionDate) {
          setSelectedPeriod([getPeriodDayFromDate(latestTransactionDate)]);
        }
      } catch (err) {
        setError(
          err.message || "Не удалось загрузить даты расходов для календаря",
        );
      }
    };

    loadCalendarData();
  }, []);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        setError("");

        if (selectedPeriod.length === 0) {
          setTransactions([]);
          return;
        }

        const firstDay = selectedPeriod[0];
        const lastDay = selectedPeriod[selectedPeriod.length - 1];
        const data = await getTransactionsByPeriod({
          start: getPeriodDateText(firstDay),
          end: getPeriodDateText(lastDay),
        });

        setTransactions(filterTransactionsByPeriod(data, firstDay, lastDay));
      } catch (err) {
        setError(err.message || "Не удалось загрузить расходы");
      }
    };

    loadTransactions();
  }, [selectedPeriod]);

  return (
    <Wrapper>
      <Header />

      <Container>
        <Title>Анализ расходов</Title>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Content>
          <Left>
            <Calendar
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
              startYear={calendarYears.startYear}
              endYear={calendarYears.endYear}
            />
          </Left>

          <Right>
            <Chart
              selectedPeriod={selectedPeriod}
              transactions={transactions}
            />
          </Right>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default AnalyticsPage;
