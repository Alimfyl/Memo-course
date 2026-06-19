import {

Wrapper,

Title,

Subtitle,

Grid,

Day

}

from "./Calendar.styled";

const days=[

1,2,3,4,5,6,7,

8,9,10,11,12,13,14,

15,16,17,18,19,20,21,

22,23,24,25,26,27,28,

29,30

]

function Calendar(){

return(

<Wrapper>

<Title>

Период

</Title>

<Subtitle>

Июнь 2026

</Subtitle>

<Grid>

{

days.map(day=>(

<Day

key={day}

active={

day===12 ||

day===13 ||

day===14

}

>

{day}

</Day>

))

}

</Grid>

</Wrapper>

)

}

export default Calendar;