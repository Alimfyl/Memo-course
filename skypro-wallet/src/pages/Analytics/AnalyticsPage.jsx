import Header from '../../components/Header/Header';
import Calendar from '../../components/Calendar/Calendar';
import Chart from '../../components/Chart/Chart';
import { Wrapper, Content, Left, Right } from './AnalysticsPage.styled';

const AnalyticsPage = () => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <Calendar />
        </Left>
        <Right>
          <Chart />
        </Right>
      </Content>
    </Wrapper>
  );
};

export default AnalyticsPage;