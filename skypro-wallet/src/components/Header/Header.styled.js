import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  min-height: 64px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 120px;
  background: #ffffff;

  @media (max-width: 900px) {
    padding: 0 40px;
  }

  @media (max-width: 760px) {
    min-height: auto;
    align-items: flex-start;
    flex-direction: column;
    padding: 18px 24px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;

  svg {
    font-size: 20px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;

  @media (max-width: 760px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: #222222;
  font-size: 15px;
  font-weight: 400;

  &.active {
    color: #7b2ff2;
  }

  &.active::after {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #7b2ff2;
    content: "";
  }
`;

export const Logout = styled(Link)`
  color: #111111;
  font-size: 15px;
  font-weight: 700;
`;
