import { FiCreditCard } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

import { logoutUser } from "../../api/authApi";

import { Container, Logo, Navigation, NavLink, Logout } from "./Header.styled";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

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

      <Logout as="button" onClick={handleLogout}>
        Выйти
      </Logout>
    </Container>
  );
}

export default Header;
