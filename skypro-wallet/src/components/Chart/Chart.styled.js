import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  height: 540px;

  background: #ffffff;

  border-radius: 28px;

  padding: 32px;

  box-sizing: border-box;

  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);

  overflow-x: auto;
`;

export const Title = styled.h2`
  font-size: 22px;

  font-weight: 700;

  margin-bottom: 30px;
`;

export const Amount = styled.h1`
  font-size: 50px;

  font-weight: 700;

  line-height: 1;

  margin-bottom: 12px;

  color: #111111;

  @media (max-width: 620px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.div`
  font-size: 14px;

  color: #9e9e9e;

  margin-bottom: 36px;
`;
