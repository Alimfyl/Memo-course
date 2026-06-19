import {

Link,

useNavigate

}

from

"react-router-dom";

import Button

from

"../../components/Button/Button";

import Input

from

"../../components/Input/Input";

import {

Wrapper,

Card,

Title,

Form,

Bottom

}

from

"./LoginPage.styled";

function LoginPage(){

const navigate=

useNavigate();

return(

<Wrapper>

<Card>

<Title>

Вход

</Title>

<Form>

<Input

placeholder="Логин"

/>

<Input

type="password"

placeholder="Пароль"

/>

<Button

onClick={()=>

navigate(

"/expenses"

)

}

>

Войти

</Button>

</Form>

<Bottom>

Нет аккаунта?

<br></br>

<Link to="/register">

Зарегистрироваться

</Link>

</Bottom>

</Card>

</Wrapper>

)

}

export default LoginPage;