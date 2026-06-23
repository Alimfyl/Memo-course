import styled from "styled-components";

export const Wrapper = styled.div`

min-height:100vh;

`;

export const Container = styled.div`

max-width:1200px;

margin: 0 auto;
padding: 50px 0 80px;

`;

export const Title = styled.h1`

font-size:48px;

font-weight:700;

margin-bottom:48px;

`;

export const Content = styled.div`

display:flex;

gap:32px;

align-items:stretch;

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