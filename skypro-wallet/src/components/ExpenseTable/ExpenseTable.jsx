import {

Wrapper,

Table,

Head,

Cell

}

from "./ExpenseTable.styled";

const expenses=[

{

date:"15.06.2026",

category:"Продукты",

sum:"2500 ₽"

},

{

date:"16.06.2026",

category:"Транспорт",

sum:"500 ₽"

},

{

date:"17.06.2026",

category:"Развлечения",

sum:"1500 ₽"

},

{

date:"18.06.2026",

category:"Кафе",

sum:"900 ₽"

}

]

function ExpenseTable(){

return(

<Wrapper>

<Table>

<thead>

<tr>

<Head>

Дата

</Head>

<Head>

Категория

</Head>

<Head>

Сумма

</Head>

</tr>

</thead>

<tbody>

{

expenses.map(item=>(

<tr

key={

item.date+

item.category

}

>

<Cell>

{item.date}

</Cell>

<Cell>

{item.category}

</Cell>

<Cell>

{item.sum}

</Cell>

</tr>

))

}

</tbody>

</Table>

</Wrapper>

)

}

export default ExpenseTable;