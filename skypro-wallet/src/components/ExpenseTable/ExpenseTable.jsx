import { FiTrash2 } from "react-icons/fi";

import {
  Wrapper,
  TableScroller,
  TableTitle,
  Table,
  Head,
  Row,
  Cell,
  Sum,
  Delete,
} from "./ExpenseTable.styled";

const expenses = [
  {
    id: 1,
    title: "Пятерочка",
    category: "Еда",
    date: "03.07.2024",
    sum: "3 500 ₽",
  },
  {
    id: 2,
    title: "Яндекс Такси",
    category: "Транспорт",
    date: "03.07.2024",
    sum: "730 ₽",
  },
  {
    id: 3,
    title: "Аптека Вита",
    category: "Другое",
    date: "03.07.2024",
    sum: "1 200 ₽",
  },
  {
    id: 4,
    title: "Бургер Кинг",
    category: "Еда",
    date: "03.07.2024",
    sum: "950 ₽",
  },
  {
    id: 5,
    title: "Деливери",
    category: "Еда",
    date: "02.07.2024",
    sum: "1 320 ₽",
  },
  {
    id: 6,
    title: "Кофейня №1",
    category: "Еда",
    date: "02.07.2024",
    sum: "400 ₽",
  },
  {
    id: 7,
    title: "Бильярд",
    category: "Развлечения",
    date: "29.06.2024",
    sum: "600 ₽",
  },
  {
    id: 8,
    title: "Перекресток",
    category: "Еда",
    date: "29.06.2024",
    sum: "2 360 ₽",
  },
  {
    id: 9,
    title: "Лукойл",
    category: "Транспорт",
    date: "29.06.2024",
    sum: "1 000 ₽",
  },
  {
    id: 10,
    title: "Летуаль",
    category: "Другое",
    date: "29.06.2024",
    sum: "4 300 ₽",
  },
  {
    id: 11,
    title: "Яндекс Такси",
    category: "Транспорт",
    date: "28.06.2024",
    sum: "320 ₽",
  },
  {
    id: 12,
    title: "Перекресток",
    category: "Еда",
    date: "28.06.2024",
    sum: "1 360 ₽",
  },
  {
    id: 13,
    title: "Деливери",
    category: "Еда",
    date: "28.06.2024",
    sum: "2 320 ₽",
  },
  {
    id: 14,
    title: "Вкусвилл",
    category: "Еда",
    date: "27.06.2024",
    sum: "1 220 ₽",
  },
  {
    id: 15,
    title: "Кофейня №1",
    category: "Еда",
    date: "27.06.2024",
    sum: "920 ₽",
  },
  {
    id: 16,
    title: "Вкусвилл",
    category: "Еда",
    date: "26.06.2024",
    sum: "840 ₽",
  },
  {
    id: 17,
    title: "Кофейня №1",
    category: "Еда",
    date: "26.06.2024",
    sum: "920 ₽",
  },
];

function ExpenseTable() {
  return (
    <Wrapper>
      <TableTitle>Таблица расходов</TableTitle>

      <TableScroller>
        <Table>
          <thead>
            <tr>
              <Head>Описание</Head>
              <Head>Категория</Head>
              <Head>Дата</Head>
              <Head>Сумма</Head>
              <Head />
            </tr>
          </thead>

          <tbody>
            {expenses.map((item) => (
              <Row key={item.id}>
                <Cell>{item.title}</Cell>
                <Cell>{item.category}</Cell>
                <Cell>{item.date}</Cell>
                <Sum>{item.sum}</Sum>
                <Cell>
                  <Delete aria-label={`Удалить расход ${item.title}`}>
                    <FiTrash2 />
                  </Delete>
                </Cell>
              </Row>
            ))}
          </tbody>
        </Table>
      </TableScroller>
    </Wrapper>
  );
}

export default ExpenseTable;
