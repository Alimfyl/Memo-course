import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 96px 24px 40px;
`;

export const Logo = styled.div`
  position: absolute;
  top: 24px;
  left: 120px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;

  svg {
    font-size: 20px;
  }

  @media (max-width: 760px) {
    left: 24px;
  }
`;

export const Card = styled.div`
  width: 380px;
  max-width: 100%;
  padding: 34px 32px;
  background: #ffffff;
  border-radius: 28px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  text-align: center;
  font-size: 26px;
  line-height: 1.2;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Bottom = styled.p`
  margin-top: 24px;
  color: #9b9b9b;
  text-align: center;
  font-size: 13px;
  line-height: 1.5;

  a {
    color: #9b9b9b;
    text-decoration: underline;
  }
`;
