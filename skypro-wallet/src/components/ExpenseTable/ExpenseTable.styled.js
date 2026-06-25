import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
  height: 618px;
  background: #ffffff;
  border-radius: 28px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.08);
`;

export const TableTitle = styled.h2`
  padding: 32px 32px 20px;
  font-size: 26px;
  line-height: 1.2;
`;

export const TableScroller = styled.div`
  height: calc(100% - 83px);
  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
`;

export const Head = styled.th`
  padding: 13px 32px 9px;
  border-bottom: 1px solid #d7d7d7;
  color: #a6a6a6;
  text-align: left;
  font-size: 13px;
  font-weight: 400;
`;

export const Row = styled.tr``;

export const Cell = styled.td`
  padding: 7px 32px;
  color: #222222;
  font-size: 13px;
  line-height: 1.2;
`;

export const Sum = styled(Cell)`
  white-space: nowrap;
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #9b9b9b;
  font-size: 15px;

  &:hover {
    color: #8f5bff;
  }
`;
