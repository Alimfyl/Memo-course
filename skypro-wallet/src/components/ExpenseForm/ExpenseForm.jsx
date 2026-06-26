import { useState } from "react";
import {
  MdDirectionsCar,
  MdFastfood,
  MdHome,
  MdNotes,
  MdSchool,
  MdSportsEsports,
} from "react-icons/md";

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
  {
    title: "Еда",
    icon: <MdFastfood />,
  },
  {
    title: "Транспорт",
    icon: <MdDirectionsCar />,
  },
  {
    title: "Жилье",
    icon: <MdHome />,
  },
  {
    title: "Развлечения",
    icon: <MdSportsEsports />,
  },
  {
    title: "Образование",
    icon: <MdSchool />,
  },
  {
    title: "Другое",
    icon: <MdNotes />,
  },
];

function ExpenseForm() {
  const [active, setActive] = useState("Еда");

  return (
    <Wrapper>
      <Title>Новый расход</Title>

      <Form>
        <Label>Описание</Label>
        <Input placeholder="Введите описание" />

        <Label>Категория</Label>
        <Categories>
          {categories.map((item) => (
            <Category
              key={item.title}
              $active={active === item.title}
              onClick={() => setActive(item.title)}
              type="button"
            >
              {item.icon}
              <span>{item.title}</span>
            </Category>
          ))}
        </Categories>

        <Label>Дата</Label>
        <Input placeholder="Введите дату" />

        <Label>Сумма</Label>
        <Input placeholder="Введите сумму" />

        <Submit>Добавить новый расход</Submit>
      </Form>
    </Wrapper>
  );
}

export default ExpenseForm;
