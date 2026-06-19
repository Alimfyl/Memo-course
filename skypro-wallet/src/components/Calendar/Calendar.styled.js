import styled from "styled-components";

export const Wrapper=styled.div`

background:#fff;

padding:25px;

border-radius:20px;

box-shadow:

0 10px 30px

rgba(0,0,0,.05);

`;

export const Title=styled.h3`

font-size:18px;

margin-bottom:20px;

`;

export const Subtitle=styled.p`

font-size:14px;

color:#999;

margin-bottom:20px;

`;

export const Grid=styled.div`

display:grid;

grid-template-columns:

repeat(7,1fr);

gap:10px;

`;

export const Day=styled.div`

height:34px;

display:flex;

justify-content:center;

align-items:center;

border-radius:10px;

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

"#fff"

:

"#222"

};

font-size:13px;

`;