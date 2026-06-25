import { useState } from "react";

import Calendar from "../../components/Calendar/Calendar";
import Chart from "../../components/Chart/Chart";
import Header from "../../components/Header/Header";

import { Wrapper, Container, Title, Content, Left, Right } from "./AnalysticsPage.styled";

function AnalyticsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState([
    {
      day: 10,
      month: "июля",
      year: 2024,
    },
  ]);

  return (
    <Wrapper>
      <Header />

      <Container>
        <Title>Анализ расходов</Title>

        <Content>
          <Left>
            <Calendar setSelectedPeriod={setSelectedPeriod} />
          </Left>

          <Right>
            <Chart selectedPeriod={selectedPeriod} />
          </Right>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default AnalyticsPage;
