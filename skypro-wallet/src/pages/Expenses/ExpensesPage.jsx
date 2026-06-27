import { useEffect, useState } from "react";

import { addTransaction, deleteTransaction, getTransactions } from "../../api/transactionApi";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import Header from "../../components/Header/Header";

import { Wrapper, Container, Title, Content, Left, Right } from "./ExpensesPage.styled";

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await getTransactions();

        setExpenses(data);
      } catch {
        setError("Не удалось загрузить расходы");
      }
    };

    loadTransactions();
  }, []);

  const handleAddExpense = async (expense) => {
    try {
      setError("");

      const newExpense = await addTransaction(expense);

      setExpenses((prev) => [newExpense, ...prev]);
    } catch {
      setError("Не удалось добавить расход");
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      setError("");

      await deleteTransaction(id);

      setExpenses((prev) => prev.filter((item) => item.id !== id));
    } catch {
      setError("Не удалось удалить расход");
    }
  };

  return (
    <Wrapper>
      <Header />

      <Container>
        <Title>Мои расходы</Title>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Content>
          <Left>
            <ExpenseTable expenses={expenses} onDelete={handleDeleteExpense} />
          </Left>

          <Right>
            <ExpenseForm onAddExpense={handleAddExpense} />
          </Right>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default ExpensesPage;
