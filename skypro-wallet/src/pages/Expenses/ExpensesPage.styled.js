import styled from 'styled-components';

export const Wraper = styled.div`
min-height: 100vh;
`;

export const Content = styled.div`

display:flex;

gap:30px;

padding:40px;

align-items:flex-start;

@media(max-width:900px){

flex-direction:column;

}

`;

export const Left = styled.div`
flex: 2;
`;

export const Right = styled.div`
flex: 1;
`;