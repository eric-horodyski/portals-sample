import { v4 as uuid } from "uuid";
import { httpClient } from "@jobsync/api";

export enum ExpenseType {
  Travel = "Travel",
  Food = "Food",
  Misc = "Misc",
}

export interface Expense {
  id: string;
  userId: string;
  amount: number;
  merchant: string;
  date: string;
  note: string;
  type: ExpenseType;
}

export type ExpenseInput = Expense | Omit<Expense, "id">;

export const getExpenses = async (userId?: string): Promise<Expense[]> => {
  const url = userId ? `/expenses/user/${userId}` : "/expenses";

  const res = await httpClient.get(url);
  const { data } = res.data as { data: Expense[] };
  data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return data;
};

export const getExpense = async (id: string): Promise<Expense> => {
  const { data } = await httpClient.get(`/expenses/${id}`);
  return data;
};

export const upsertExpense = async (data: ExpenseInput) => {
  const expense: Expense = "id" in data ? data : { ...data, id: uuid() };
  expense.date = new Date(expense.date).toISOString();
  await httpClient.post("/expenses", expense);
};
