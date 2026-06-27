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

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [active, setActive] = useState("Еда");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");

    if (!title.trim()) {
      setError("Введите описание");
      return;
    }

    if (!date.trim()) {
      setError("Введите дату");
      return;
    }

    if (!amount.trim()) {
      setError("Введите сумму");
      return;
    }

    const preparedAmount = Number(amount.replace(/\s/g, "").replace(",", "."));

    if (Number.isNaN(preparedAmount) || preparedAmount <= 0) {
      setError("Введите корректную сумму");
      return;
    }

    await onAddExpense({
      title: title.trim(),
      category: active,
      date: date.trim(),
      amount: preparedAmount,
    });

    setTitle("");
    setActive("Еда");
    setDate("");
    setAmount("");
  };

  return (
    <Wrapper>
      <Title>Новый расход</Title>

      <Form>
        <Label>Описание</Label>
        <Input
          placeholder="Введите описание"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

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
        <Input
          placeholder="Введите дату"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <Label>Сумма</Label>
        <Input
          placeholder="Введите сумму"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />

        {error && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              margin: 0,
            }}
          >
            {error}
          </p>
        )}

        <Submit type="button" onClick={handleSubmit}>
          Добавить новый расход
        </Submit>
      </Form>
    </Wrapper>
  );
}

export default ExpenseForm;
