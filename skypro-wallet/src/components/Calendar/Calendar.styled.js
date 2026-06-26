import styled from "styled-components";

export const Wrapper = styled.div`
  width: 379px;
  max-width: 100%;
  height: 540px;
  background: #ffffff;
  padding: 32px;
  border-radius: 32px;
  box-sizing: border-box;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 28px;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding-bottom: 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #eaeaea;
  font-size: 14px;
  font-weight: 500;
  color: #a6a6a6;
  text-align: center;
  text-transform: lowercase;
`;

export const DaysWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(32px, 40px));
  gap: 12px;
  justify-content: space-between;
  margin-bottom: 28px;

  @media (max-width: 420px) {
    gap: 6px;
  }
`;

export const Day = styled.button`
  width: 100%;
  aspect-ratio: 1;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.$active ? "#8F5BFF" : "#F5F5F5")};
  color: ${(props) => (props.$active ? "#FFFFFF" : "#222222")};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => (props.$active ? "#8F5BFF" : "#eeeeee")};
  }
`;
