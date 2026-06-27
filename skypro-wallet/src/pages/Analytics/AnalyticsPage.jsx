import { useEffect, useMemo, useState } from "react";

import { getTransactions } from "../../api/transactionsApi";
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

const parseTransactionDate = (date) => {
  const [day, month, year] = date.split(".").map(Number);

  return new Date(year, month - 1, day).getTime();
};

const getPeriodDate = (periodDay) => {
  return new Date(
    periodDay.year,
    periodDay.monthNumber,
    periodDay.day
  ).getTime();
};

function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState([
    {
      day: 10,
      month: "июля",
      monthNumber: 6,
      year: 2024,
      order: 0,
    },
  ]);

  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await getTransactions();

        setTransactions(data);
      } catch {
        setError("Не удалось загрузить расходы");
      }
    };

    loadTransactions();
  }, []);

  const filteredTransactions = useMemo(() => {
    if (selectedPeriod.length === 0) {
      return [];
    }

    const firstDay = selectedPeriod[0];
    const lastDay = selectedPeriod[selectedPeriod.length - 1];
    const startDate = getPeriodDate(firstDay);
    const endDate = getPeriodDate(lastDay);

    return transactions.filter((transaction) => {
      const transactionDate = parseTransactionDate(transaction.date);

      return transactionDate >= startDate && transactionDate <= endDate;
    });
  }, [selectedPeriod, transactions]);

  return (
    <Wrapper>
      <Header />

      <Container>
        <Title>Анализ расходов</Title>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Content>
          <Left>
            <Calendar setSelectedPeriod={setSelectedPeriod} />
          </Left>

          <Right>
            <Chart
              selectedPeriod={selectedPeriod}
              transactions={filteredTransactions}
            />
          </Right>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default AnalyticsPage;
