import { useLocation } from "react-router-dom";
import { FiCreditCard } from "react-icons/fi";

import { Container, Logo, Navigation, NavLink, Logout } from "./Header.styled";

function Header() {
  const location = useLocation();

  return (
    <Container>
      <Logo>
        <FiCreditCard />
        Skypro.Wallet
      </Logo>

      <Navigation>
        <NavLink
          to="/expenses"
          className={location.pathname === "/expenses" ? "active" : ""}
        >
          Мои расходы
        </NavLink>

        <NavLink
          to="/analytics"
          className={location.pathname === "/analytics" ? "active" : ""}
        >
          Анализ расходов
        </NavLink>
      </Navigation>

      <Logout to="/login">Выйти</Logout>
    </Container>
  );
}

export default Header;
