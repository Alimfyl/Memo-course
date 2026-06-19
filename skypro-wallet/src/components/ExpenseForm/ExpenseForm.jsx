import Button

from "../Button/Button";

import Input

from "../Input/Input";

import {

Wrapper,

Title,

Form,

Select

}

from "./ExpenseForm.styled";

function ExpenseForm(){

return(

<Wrapper>

<Title>

Новый расход

</Title>

<Form>

<Input

placeholder="Дата"

/>

<Select>

<option>

Продукты

</option>

<option>

Транспорт

</option>

<option>

Развлечения

</option>

<option>

Кафе

</option>

</Select>

<Input

placeholder="Сумма"

/>

<Button>

Добавить

</Button>

</Form>

</Wrapper>

)

}

export default ExpenseForm;