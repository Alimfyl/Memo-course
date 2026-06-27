import { useEffect, useState } from "react";

import Calendar from "../../components/Calendar/Calendar";
import Chart from "../../components/Chart/Chart";
import Header from "../../components/Header/Header";

import { getTransactions } from "../../api/transactionsApi";

import {
  Wrapper,
  Container,
  Title,
  Content,
  Left,
  Right,
} from "./AnalysticsPage.styled";

function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState([
    {
      day: 10,
      month: "июля",
      year: 2024,
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

  return (
    <Wrapper>
      <Header />

      <Container>
        <Title>Анализ расходов</Title>

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}

        <Content>
          <Left>
            <Calendar
              setSelectedPeriod={setSelectedPeriod}
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