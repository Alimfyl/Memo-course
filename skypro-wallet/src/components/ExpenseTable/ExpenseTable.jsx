import {
  Wrapper,
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
    category: "Продукты",
    date: "15.06.2026",
    sum: "2500 ₽",
  },

  {
    id: 2,
    category: "Транспорт",
    date: "16.06.2026",
    sum: "500 ₽",
  },

  {
    id: 3,
    category: "Кафе",
    date: "17.06.2026",
    sum: "900 ₽",
  },

  {
    id: 4,
    category: "Развлечения",
    date: "18.06.2026",
    sum: "1500 ₽",
  },
];

function ExpenseTable() {
  return (
    <Wrapper>
      <Table>
        <thead>
          <tr>
            <Head>Категория</Head>

            <Head>Дата</Head>

            <Head>Сумма</Head>

            <Head></Head>
          </tr>
        </thead>

        <tbody>
          {expenses.map((item) => (
            <Row key={item.id}>
              <Cell>{item.category}</Cell>

              <Cell>{item.date}</Cell>

              <Sum>{item.sum}</Sum>

              <Cell>
                <Delete>✕</Delete>
              </Cell>
            </Row>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default ExpenseTable;