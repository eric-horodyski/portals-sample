import { Inputs, Layout } from "@jobsync/ui";
import { Box, Button } from "@mui/joy";
import { useNavigate, useLoaderData } from "react-router-dom";
import * as yup from "Yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Expense, ExpenseType, upsertExpense } from "../api";
import { session } from "@jobsync/api";
import { Analytics } from "@jobsync/portals";

const validationSchema = yup.object({
  merchant: yup.string().required().label("Merchant"),
  amount: yup.number().required().label("Amount"),
  type: yup.mixed<ExpenseType>().required().label("Type"),
  date: yup.string().required().label("Date"),
  note: yup.string().required().label("Note"),
  receipt: yup.string(),
});

const ExpenseForm: React.FC = () => {
  const navigate = useNavigate();
  const expense = useLoaderData() as Expense | undefined;

  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors, isValid, isDirty },
  } = useForm<Omit<Expense, "id" | "userId">>({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
    defaultValues: { ...expense, date: expense?.date.slice(0, 10) },
  });

  const submit = async (data: Omit<Expense, "id" | "userId">) => {
    const payload = expense?.id ? { ...data, id: expense!.id } : data;
    await Analytics.logAction({
      action: expense?.id ? "Update Expense" : "Add Expense",
    });
    await upsertExpense({
      ...payload,
      userId: expense?.userId || session!.sub,
    });
    navigate(-1);
  };

  return (
    <Layout>
      <Layout.Header>
        <Layout.BackButton onClick={() => navigate("/expenses")} />
        <Layout.Title title={expense?.id ? "Edit Expense" : "New Expense"} />
      </Layout.Header>
      <Layout.Content>
        <Inputs.Text
          label="Merchant"
          name="merchant"
          control={control}
          error={errors.merchant}
          required
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
          <Inputs.Currency
            label="Amount"
            name="amount"
            control={control}
            error={errors.amount}
            required
            sx={{ width: "70%" }}
          />
          <Inputs.Options
            label="Type"
            name="type"
            control={control}
            required
            sx={{ width: "30%" }}
            setValue={setValue}
            defaultValue={ExpenseType.Misc}
            options={Object.values(ExpenseType)}
          />
        </Box>
        <Inputs.DateTime
          label="Date"
          name="date"
          control={control}
          required
          error={errors.date}
        />
        <Inputs.Text
          label="Note"
          name="note"
          control={control}
          error={errors.note}
          required
        />
        <Button
          type="submit"
          disabled={!isDirty || !isValid}
          onClick={handleSubmit((data) => submit(data))}
          size="lg"
          fullWidth
          sx={{ mt: 2, py: 2.5 }}
        >
          Save
        </Button>
      </Layout.Content>
    </Layout>
  );
};
export default ExpenseForm;
