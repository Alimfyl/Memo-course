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

width:"90%",

color:"#8F5BFF"

},

{

title:"Транспорт",

width:"35%",

color:"#60A5FA"

},

{

title:"Развлечения",

width:"65%",

color:"#FB923C"

},

{

title:"Кафе",

width:"45%",

color:"#EC4899"

},

{

title:"Подарки",

width:"25%",

color:"#34D399"

}

]

function Chart(){

return(

<Wrapper>

<Title>

Расходы по категориям

</Title>

{

data.map(item=>(

<Row

key={item.title}

>

<Label>

{item.title}

</Label>

<Bar

width={item.width}

color={item.color}

/>

</Row>

))

}

</Wrapper>

)

}

export default Chart;