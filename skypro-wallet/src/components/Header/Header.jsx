import {

Container,

Logo,

Navigation,

NavLink

}

from "./Header.styled";

function Header(){

return(

<Container>

<Logo>

SkyproWallet

</Logo>

<Navigation>

<NavLink to="/expenses">

Мои расходы

</NavLink>

<NavLink to="/analytics">

Анализ расходов

</NavLink>

<NavLink to="/login">

Выйти

</NavLink>

</Navigation>

</Container>

)

}

export default Header;