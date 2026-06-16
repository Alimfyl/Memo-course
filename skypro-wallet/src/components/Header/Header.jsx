import { Link } from "react-router-dom";

import "./Header.css";

function Header() {

return (

<header className="header">

<div className="logo">

SkyproWallet

</div>

<nav>

<Link to="/expenses">

Мои расходы

</Link>

<Link to="/analytics">

Анализ расходов

</Link>

<Link to="/login">

Выйти

</Link>

</nav>

</header>

)

}

export default Header;