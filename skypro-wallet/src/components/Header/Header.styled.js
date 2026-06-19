import styled

from "styled-components";

import { Link }

from "react-router-dom";

export const Container=

styled.header`

height:44px;

padding:

0 60px;

display:flex;

justify-content:

space-between;

align-items:center;

background:#fff;

`;

export const Logo=

styled.div`

font-size:11px;

font-weight:700;

`;

export const Navigation=

styled.nav`

display:flex;

gap:50px;

`;

export const NavLink=

styled(Link)`

font-size:11px;

font-weight:500;

color:#222;

position:relative;

&.active{

color:#8F5BFF;

}

&.active::after{

content:"";

position:absolute;

left:0;

bottom:-14px;

width:100%;

height:2px;

background:#8F5BFF;

}

`;

export const Logout=

styled(Link)`

font-size:11px;

color:#222;

`;