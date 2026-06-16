import { Link }

from "react-router-dom";

import Button

from "../../components/Button/Button";

import Input

from "../../components/Input/Input";

import {

Wrapper,

Card,

Title,

Text

}

from "./LoginPage.styled";

function LoginPage(){

return(

<Wrapper>

<Card>

<Title>

Вход

</Title>

<Input

placeholder="Логин"

/>

<Input

type="password"

placeholder="Пароль"

/>

<Button>

Войти

</Button>

<Text>

Нет аккаунта?

{" "}

<Link to="/register">

Зарегистрироваться

</Link>

</Text>

</Card>

</Wrapper>

)

}

export default LoginPage;