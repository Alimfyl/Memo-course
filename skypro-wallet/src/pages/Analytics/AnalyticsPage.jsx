import Header from "../../components/Header/Header";

import Calendar from "../../components/Calendar/Calendar";

import Chart from "../../components/Chart/Chart";

import {

Wrapper,

Container,

Title,

Content,

Left,

Right

}

from "./AnalysticsPage.styled";

function AnalyticsPage(){

return(

<Wrapper>

<Header/>

<Container>

<Title>

Анализ расходов

</Title>

<Content>

<Left>

<Calendar/>

</Left>

<Right>

<Chart/>

</Right>

</Content>

</Container>

</Wrapper>

)

}

export default AnalyticsPage;