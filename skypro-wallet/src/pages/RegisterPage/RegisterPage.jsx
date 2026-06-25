import { Link } from "react-router-dom";
import { FiCreditCard } from "react-icons/fi";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Wrapper, Logo, Card, Title, Text } from "./RegisterPage.styled";

function RegisterPage() {
  return (
    <Wrapper>
      <Logo>
        <FiCreditCard />
        Skypro.Wallet
      </Logo>

      <Card>
        <Title>Регистрация</Title>

        <Input placeholder="Имя" />

        <Input placeholder="Логин" />

        <Input type="password" placeholder="Пароль" />

        <Button>Зарегистрироваться</Button>

        <Text>
          Уже есть аккаунт?
          <br />
          <Link to="/login">Войдите здесь</Link>
        </Text>
      </Card>
    </Wrapper>
  );
}

export default RegisterPage;
