import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 0 72px;

  @media (max-width: 1260px) {
    padding-right: 24px;
    padding-left: 24px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 38px;
  font-size: 32px;
  line-height: 1.2;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 790px) 380px;
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

export const Left = styled.div`
  min-width: 0;
`;

export const Right = styled.div`
  min-width: 0;
`;
