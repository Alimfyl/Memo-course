import Header

from "../../components/Header/Header";

import ExpenseTable

from "../../components/ExpenseTable/ExpenseTable";

import ExpenseForm

from "../../components/ExpenseForm/ExpenseForm";

import {

Wrapper,

Container,

Title,

Content,

Left,

Right

}

from "./ExpensesPage.styled";

function ExpensesPage(){

return(

<Wrapper>

<Header/>

<Container>

<Title>

Мои расходы

</Title>

<Content>

<Left>

<ExpenseTable/>

</Left>

<Right>

<ExpenseForm/>

</Right>

</Content>

</Container>

</Wrapper>

)

}

export default ExpensesPage;