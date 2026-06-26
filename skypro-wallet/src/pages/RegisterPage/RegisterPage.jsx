import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiCreditCard } from "react-icons/fi";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import { registerUser } from "../../api/authApi";

import {
  Wrapper,
  Logo,
  Card,
  Title,
  Text,
} from "./RegisterPage.styled";

function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [login, setLogin] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");

      if (!name || !login || !password) {
        setError("Заполните все поля");
        return;
      }

      await registerUser({
        name,
        login,
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
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <Input
          placeholder="Логин"
          value={login}
          onChange={(e) =>
            setLogin(e.target.value)
          }
        />

        <Input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
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

        <Button
          onClick={handleRegister}
        >
          Зарегистрироваться
        </Button>

        <Text>
          Уже есть аккаунт?
          <br />
          <Link to="/login">
            Войдите здесь
          </Link>
        </Text>
      </Card>
    </Wrapper>
  );
}

export default RegisterPage;