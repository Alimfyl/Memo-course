import styled from "styled-components";

export const Wrapper = styled.div`

width:379px;

height:540px;

background: #f7f7f7;

padding:32px;

border-radius:28px;

box-sizing:border-box;

box-shadow:

0 10px 30px

rgba(0,0,0,.05);

display:flex;

flex-direction:column;

`;

export const Title = styled.h3`

font-size:16px;

font-weight:600;

color:#8A8A8A;

margin-bottom:10px;

`;

export const Subtitle = styled.h2`

font-size:28px;

font-weight:700;

margin-bottom:28px;

`;

export const WeekDays = styled.div`

display:grid;

grid-template-columns:

repeat(7,1fr);

margin-bottom:24px;

font-size:14px;

font-weight:600;

color:#8A8A8A;

text-align:center;

`;

export const DaysWrapper = styled.div`

flex:1;

overflow-y:auto;

padding-right:8px;

&::-webkit-scrollbar{

width:6px;

}

&::-webkit-scrollbar-thumb{

background:#D8D8D8;

border-radius:20px;

}

&::-webkit-scrollbar-track{

background:transparent;

}

`;

export const Grid = styled.div`

display:grid;

grid-template-columns:

repeat(7,1fr);


`;

export const Day = styled.div`

width:40px;

height:40px;

display:flex;

justify-content:center;

align-items:center;

border-radius:50%;

font-size:14px;

cursor:pointer;

background:

${props=>

props.active

?

"#8F5BFF"

:

"#F5F5F5"

};

color:

${props=>

props.active

?

"#FFFFFF"

:

"#222222"

};

transition:0.2s;

&:hover{

background:

${props=>

props.active

?

"#8F5BFF"

:

"#ECECEC"

};

}

`;