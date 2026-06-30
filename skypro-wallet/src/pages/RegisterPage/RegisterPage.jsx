import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../../api/authApi";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { Wrapper, Logo, Card, Title, Text } from "./RegisterPage.styled";

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");

      if (!name.trim() || !login.trim() || !password.trim()) {
        setError("Заполните все поля");
        return;
      }

      await registerUser({
        name: name.trim(),
        login: login.trim(),
        password,
      });

      navigate("/login");
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
        <Title>Регистрация</Title>

        <Input
          placeholder="Имя"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

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
          <Text
            style={{
              color: "red",
            }}
          >
            {error}
          </Text>
        )}

        <Button onClick={handleRegister}>Зарегистрироваться</Button>

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
