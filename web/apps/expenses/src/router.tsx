import {
  LoaderFunctionArgs,
  Navigate,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { refreshSession, session } from "@jobsync/api";
import { Analytics, resolveInitialContext } from "@jobsync/portals";
import App from "./App";
import ExpensesList from "./pages/ExpensesList";
import ExpenseForm from "./pages/ExpenseForm";
import { getExpense, getExpenses } from "./api";

const expensesLoader = async () => {
  await Analytics.logScreen({ screen: "Expenses List" });
  await refreshSessionIfNeeded();
  return getExpenses(session?.sub);
};

const editExpenseLoader = async ({ params }: LoaderFunctionArgs) => {
  await refreshSessionIfNeeded();
  const expense = await getExpense(params.id!);
  if (!expense) return redirect("/expenses/new");
  await Analytics.logScreen({ screen: "Edit Expense", params });
  return expense;
};

const newExpenseLoader = async () => {
  await refreshSessionIfNeeded();
  await Analytics.logScreen({ screen: "New Expense" });
  return null;
};

const refreshSessionIfNeeded = async (): Promise<void> => {
  if (!session) {
    const { accessToken, refreshToken } = resolveInitialContext();
    return refreshSession(accessToken, refreshToken);
  }
  return Promise.resolve();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/expenses" replace={true} />,
      },
      {
        path: "*",
        element: <Navigate to="/expenses" replace={true} />,
      },
      {
        path: "expenses",
        element: <ExpensesList />,
        loader: expensesLoader,
      },
      {
        path: "expenses/:id",
        element: <ExpenseForm />,
        loader: editExpenseLoader,
      },
      {
        path: "expenses/new",
        element: <ExpenseForm />,
        loader: newExpenseLoader,
      },
    ],
  },
]);

export default router;
