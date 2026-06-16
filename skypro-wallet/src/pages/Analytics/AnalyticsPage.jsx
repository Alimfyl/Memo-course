import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import Chart from '../../components/Chart/Chart';
import { Wrapper, Container, Left, Right } from './AnalysticsPage.styled';

const AnalyticsPage = () => {
  return (
    <Wrapper>
      <Container>
        <Left>
          <Calendar />
        </Left>
        <Right>
          <Chart />
        </Right>
      </Container>
    </Wrapper>
  );
};

export default AnalyticsPage;