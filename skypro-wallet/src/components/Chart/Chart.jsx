import {

Wrapper,

Title,

Row,

Label,

Bar

}

from "./Chart.styled";

const data=[

{

title:"Продукты",

width:"85%"

},

{

title:"Транспорт",

width:"35%"

},

{

title:"Развлечения",

width:"60%"

},

{

title:"Кафе",

width:"45%"

}

]

function Chart(){

return(

<Wrapper>

<Title>

Анализ расходов

</Title>

{

data.map(item=>(

<Row key={item.title}>

<Label>

{item.title}

</Label>

<Bar

width={item.width}

/>

</Row>

))

}

</Wrapper>

)

}

export default Chart;