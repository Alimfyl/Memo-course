import styled from "styled-components";

export const Wrapper = styled.div`
  background: #ffffff;

  border-radius: 20px;

  padding: 28px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

export const Table = styled.table`
  width: 100%;

  border-collapse: collapse;
`;

export const Head = styled.th`
  text-align: left;

  padding-bottom: 18px;

  font-size: 14px;

  font-weight: 600;

  color: #8a8a8a;
`;

export const Row = styled.tr`
  border-top: 1px solid #f1f1f1;
`;

export const Cell = styled.td`
  padding: 22px 0;

  font-size: 14px;
`;

export const Sum = styled.td`
  padding: 22px 0;

  font-size: 15px;

  font-weight: 700;
`;

export const Delete = styled.button`
  width: 32px;

  height: 32px;

  border-radius: 50%;

  border: none;

  background: #f3f3f3;

  font-size: 18px;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #8f5bff;

    color: white;
  }
`;