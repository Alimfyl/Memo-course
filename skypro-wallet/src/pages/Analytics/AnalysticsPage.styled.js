import styled from 'styled-components';

export const Wrapper = styled.div`
min-height: 100vh;
`;
export const Content = styled.div`

padding:40px;

display:flex;

gap:30px;

align-items:flex-start;

@media(max-width:900px){

flex-direction:column;

}

`;
export const Left = styled.div`
flex: 1;
`;
export const Right = styled.div`
flex: 2;
`;