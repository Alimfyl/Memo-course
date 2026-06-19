import styled from "styled-components";

export const Wrapper = styled.div`

min-height:100vh;

`;

export const Container = styled.div`

max-width:1100px;

margin:40px auto;

`;

export const Title = styled.h1`

font-size:24px;

font-weight:700;

margin-bottom:30px;

`;

export const Content = styled.div`

display:flex;

gap:30px;

align-items:flex-start;

@media(max-width:900px){

flex-direction:column;

}

`;

export const Left = styled.div`

width:320px;

`;

export const Right = styled.div`

flex:1;

`;