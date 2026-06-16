import Header

from "../../components/Header/Header";

import ExpenseTable

from "../../components/ExpenseTable/ExpenseTable";

import ExpenseForm

from "../../components/ExpenseForm/ExpenseForm";

import {

Wrapper,

Content,

Left,

Right

}

from "./ExpensesPage.styled";

function ExpensesPage(){

return(

<Wrapper>

<Header/>

<Content>

<Left>

<ExpenseTable/>

</Left>

<Right>

<ExpenseForm/>

</Right>

</Content>

</Wrapper>

)

}

export default ExpensesPage;