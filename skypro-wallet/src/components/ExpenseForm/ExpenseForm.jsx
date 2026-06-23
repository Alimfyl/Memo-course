import { useState } from "react";

import Input from "../Input/Input";

import {
  Wrapper,
  Title,
  Form,
  Label,
  Categories,
  Category,
  Submit,
} from "./ExpenseForm.styled";

const categories = [
  "Продукты",
  "Транспорт",
  "Кафе",
  "Развлечения",
  "Подарки",
];

function ExpenseForm() {
  const [active, setActive] = useState("Продукты");

  return (
    <Wrapper>
      <Title>Новый расход</Title>

      <Form>
        <Label>Дата</Label>

        <Input placeholder="15.06.2026" />

        <Label>Категория</Label>

        <Categories>
          {categories.map((item) => (
            <Category
              key={item}
              active={active === item}
              onClick={() => setActive(item)}
              type="button"
            >
              {item}
            </Category>
          ))}
        </Categories>

        <Label>Сумма</Label>

        <Input placeholder="1000 ₽" />

        <Submit>Добавить</Submit>
      </Form>
    </Wrapper>
  );
}

export default ExpenseForm;