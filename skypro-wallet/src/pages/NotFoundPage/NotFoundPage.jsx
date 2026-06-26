import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  background-color: #f3f3f3;
  color: #1e1e1e;
`;

const BackLink = styled(Link)`
  color: #8f5bff;
  font-weight: 600;
`;

function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <h1>404</h1>
      <p>Упс... Кажется, такой страницы не существует.</p>
      <BackLink to="/expenses">Вернуться к расходам</BackLink>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;
