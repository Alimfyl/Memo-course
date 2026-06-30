import { useEffect, useState } from "react";

import { addTransaction, deleteTransaction, getTransactions } from "../../api/transactionsApi";
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
        const data = await getTransactions({
          sortBy: "date",
        });

        setExpenses(data);
      } catch (err) {
        setError(err.message || "Не удалось загрузить расходы");
      }
    };

    loadTransactions();
  }, []);

  const handleAddExpense = async (expense) => {
    try {
      setError("");

      const updatedExpenses = await addTransaction(expense);

      setExpenses(updatedExpenses);
    } catch (err) {
      setError(err.message || "Не удалось добавить расход");
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      setError("");

      const updatedExpenses = await deleteTransaction(id);

      setExpenses(updatedExpenses);
    } catch (err) {
      setError(err.message || "Не удалось удалить расход");
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
