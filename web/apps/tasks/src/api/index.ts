export enum CategoryType {
  Pending = "Pending",
  Assigned = "Assigned",
  Complete = "Complete",
}

export interface CategorySummary {
  label: CategoryType;
  total: number;
}

export interface Task {
  id: string;
  userId: string;
  category: CategoryType;
  title: string;
  percentComplete: number;
}

import tasks from "./tasks-data.json";

export const getCategorySummaries = (): CategorySummary[] =>
  tasks.categories as CategorySummary[];

export const getTasks = (): Task[] => tasks.tasks as Task[];

export const getCategoryColor = (category: CategoryType): string => {
  switch (category) {
    case CategoryType.Pending:
      return "neutral";
    case CategoryType.Complete:
      return "success";
    default:
      return "primary";
  }
};
