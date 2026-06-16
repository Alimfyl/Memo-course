import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`

height:90px;

padding:0 40px;

background:#fff;

display:flex;

justify-content:space-between;

align-items:center;

box-shadow:0 2px 8px rgba(0,0,0,.08);

`;

export const Logo = styled.div`

font-size:32px;

font-weight:700;

color:#6C5CE7;

`;

export const Navigation = styled.nav`

display:flex;

gap:40px;

`;

export const NavLink = styled(Link)`

color:#222;

font-size:18px;

font-weight:500;

transition:.3s;

&:hover{

color:#6C5CE7;

}

`;