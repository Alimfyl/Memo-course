export const Container = styled.header`

height:90px;

padding:0 60px;

background:white;

display:flex;

justify-content:space-between;

align-items:center;

box-shadow:

0 4px 25px

rgba(0,0,0,.05);

`;

export const Logo = styled.div`

font-size:34px;

font-weight:700;

color:#6C5CE7;

`;

export const Navigation = styled.nav`

display:flex;

gap:50px;

`;

export const NavLink = styled(Link)`

color:#444;

font-size:18px;

font-weight:500;

transition:.3s;

&:hover{

color:#6C5CE7;

}

`;