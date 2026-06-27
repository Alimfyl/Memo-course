import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../../api/authApi";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { Wrapper, Logo, Card, Title, Form, Bottom } from "./LoginPage.styled";

function LoginPage() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");

      if (!login || !password) {
        setError("Заполните логин и пароль");
        return;
      }

      await loginUser({
        login,
        password,
      });

      navigate("/expenses");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Wrapper>
      <Logo>
        <FiCreditCard />
        Skypro.Wallet
      </Logo>

      <Card>
        <Title>Вход</Title>

        <Form>
          <Input
            placeholder="Логин"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
          />

          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          {error && (
            <Bottom
              style={{
                color: "red",
                marginTop: 0,
              }}
            >
              {error}
            </Bottom>
          )}

          <Button onClick={handleLogin}>Войти</Button>
        </Form>

        <Bottom>
          Нет аккаунта?
          <br />
          <Link to="/register">Зарегистрироваться</Link>
        </Bottom>
      </Card>
    </Wrapper>
  );
}

export default LoginPage;
