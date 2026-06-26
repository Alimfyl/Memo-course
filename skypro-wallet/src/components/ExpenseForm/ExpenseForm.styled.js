import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 28px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 26px;
  line-height: 1.2;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Label = styled.label`
  margin-bottom: -4px;
  font-size: 17px;
  font-weight: 700;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Category = styled.button`
  display: flex;
  height: 32px;
  align-items: center;
  gap: 10px;
  padding: 0 18px;
  border-radius: 18px;
  background: ${(props) => (props.$active ? "#eeeeee" : "#f2f2f2")};
  color: #222222;
  font-size: 13px;
  transition: 0.2s;

  svg {
    font-size: 15px;
  }

  &:hover {
    background: #e9e9e9;
  }
`;

export const Submit = styled.button`
  height: 39px;
  margin-top: 6px;
  border-radius: 6px;
  background: #7b2ff2;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
`;
