import { Link } from "react-router-dom";
import { Wrapper, Card, Title, Text } from "./RegisterPage.styled";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function RegisterPage(){
return(

<Wrapper>

<Card>

<Title>Регистрация</Title>

<Input placeholder="Имя" />

<Input placeholder="Логин" />

<Input type="password" placeholder="Пароль" />

<Button>Зарегистрироваться</Button>

<Text>Уже есть аккаунт?
  
  <br></br>

  <Link to="/login">
  Войдите здесь
  
  </Link>

  </Text>

</Card>

</Wrapper>

)

}
export default RegisterPage;