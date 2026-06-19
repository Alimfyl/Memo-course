import styled from "styled-components";

export const Wrapper=styled.div`

background:white;

padding:30px;

border-radius:20px;

box-shadow:

0 10px 30px

rgba(0,0,0,.05);

`;

export const Title=styled.h2`

font-size:20px;

margin-bottom:35px;

`;

export const Row=styled.div`

display:flex;

align-items:center;

gap:20px;

margin-bottom:28px;

`;

export const Label=styled.div`

width:150px;

font-size:14px;

`;

export const Bar=styled.div`

height:28px;

border-radius:20px;

width:${props=>props.width};

background:${props=>props.color};

`;