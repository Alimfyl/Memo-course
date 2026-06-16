import Button

from "../Button/Button";

import Input

from "../Input/Input";

import {

Wrapper,

Title

}

from "./ExpenseForm.styled";

function ExpenseForm(){

return(

<Wrapper>

<Title>

Добавить расход

</Title>

<Input

placeholder="Дата"

/>

<Input

placeholder="Категория"

/>

<Input

placeholder="Сумма"

/>

<Button>

Добавить

</Button>

</Wrapper>

)

}

export default ExpenseForm;