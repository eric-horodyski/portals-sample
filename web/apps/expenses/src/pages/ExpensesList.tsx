import { Layout } from "@jobsync/ui";
import { IconButton, List } from "@mui/joy";
import { AddCircle } from "@mui/icons-material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { publishNavigateBackMessage } from "@jobsync/portals";
import { Expense } from "../api";
import { ExpenseCard } from "../components";

const ExpensesList: React.FC = () => {
  const expenses = useLoaderData() as Expense[];
  const navigate = useNavigate();

  return (
    <Layout>
      <Layout.Header>
        <Layout.BackButton onClick={publishNavigateBackMessage} />
        <Layout.Title title="Expenses" />
        <IconButton color="primary" onClick={() => navigate("/expenses/new")}>
          <AddCircle />
        </IconButton>
      </Layout.Header>
      <Layout.Content>
        <List
          sx={{
            display: "grid",
            gap: 2,
          }}
        >
          {expenses.map((expense: Expense) => (
            <ExpenseCard key={expense.id} expense={expense} />
          ))}
        </List>
      </Layout.Content>
    </Layout>
  );
};
export default ExpensesList;
