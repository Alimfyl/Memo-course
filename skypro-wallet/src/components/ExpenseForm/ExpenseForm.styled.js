import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;

  padding: 28px;

  border-radius: 20px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
  font-size: 22px;

  font-weight: 700;

  margin-bottom: 24px;
`;

export const Form = styled.div`
  display: flex;

  flex-direction: column;

  gap: 18px;
`;

export const Label = styled.label`
  font-size: 14px;

  font-weight: 500;
`;

export const Categories = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
`;

export const Category = styled.button`
  padding: 8px 14px;

  border-radius: 30px;

  border: 1px solid
    ${(props) => (props.active ? "#8F5BFF" : "#E8E8E8")};

  background: ${(props) =>
    props.active ? "#8F5BFF" : "#FFFFFF"};

  color: ${(props) =>
    props.active ? "#FFFFFF" : "#222222"};

  font-size: 13px;

  transition: 0.2s;

  cursor: pointer;
`;

export const Submit = styled.button`
  height: 46px;

  background: #8f5bff;

  color: white;

  border: none;

  border-radius: 12px;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;