import {

Table,

Th,

Td

}

from "./ExpenseTable.styled";

const data=[

{

date:"12.06.2026",

category:"Продукты",

sum:"2500 ₽"

},

{

date:"13.06.2026",

category:"Транспорт",

sum:"500 ₽"

},

{

date:"14.06.2026",

category:"Развлечения",

sum:"1500 ₽"

}

]

function ExpenseTable(){

return(

<Table>

<thead>

<tr>

<Th>

Дата

</Th>

<Th>

Категория

</Th>

<Th>

Сумма

</Th>

</tr>

</thead>

<tbody>

{

data.map(item=>(

<tr key={item.date}>

<Td>

{item.date}

</Td>

<Td>

{item.category}

</Td>

<Td>

{item.sum}

</Td>

</tr>

))

}

</tbody>

</Table>

)

}

export default ExpenseTable;