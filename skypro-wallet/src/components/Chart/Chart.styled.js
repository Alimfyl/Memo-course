import styled from "styled-components";

export const Wrapper=styled.div`

background:white;

padding:30px;

border-radius:20px;

`;

export const Title=styled.h2`

margin-bottom:30px;

`;

export const Row=styled.div`

display:flex;

align-items:center;

gap:20px;

margin-bottom:25px;

`;

export const Label=styled.div`

width:140px;

font-weight:500;

`;

export const Bar=styled.div`

height:28px;

border-radius:20px;

background:#6C5CE7;

width:${props=>props.width};

`;