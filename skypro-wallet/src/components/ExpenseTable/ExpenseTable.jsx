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

const formatAmount = (amount) => {
  return `${Number(amount).toLocaleString("ru-RU")} ₽`;
};

function ExpenseTable({ expenses, onDelete }) {
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
                <Sum>{formatAmount(item.amount)}</Sum>
                <Cell>
                  <Delete
                    type="button"
                    aria-label={`Удалить расход ${item.title}`}
                    onClick={() => onDelete(item.id)}
                  >
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
