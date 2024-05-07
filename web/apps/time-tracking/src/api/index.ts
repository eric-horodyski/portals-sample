import history from "./work-history-data.json";

export interface WorkdayHistory {
  id: string;
  userId: string;
  minutesWorked: number;
  date: Date;
}

export const getWorkHistory = (): WorkdayHistory[] => {
  return history.map((item, idx) => addDateToWorkday(item, idx + 1));
};

const addDateToWorkday = (
  item: Omit<WorkdayHistory, "date">,
  idx: number
): WorkdayHistory => {
  const date = new Date(new Date().setDate(new Date().getDate() - idx));
  return { ...item, date };
};
