import { ReactNode } from "react";
import { Sheet, Box, IconButton, Typography, Divider, Chip } from "@mui/joy";
import { FlightTakeoff, RestaurantMenu, Paid, Edit } from "@mui/icons-material";
import { Expense, ExpenseType } from "../api";
import { useNavigate } from "react-router-dom";
import { session } from "@jobsync/api";

type Props = {
  expense: Expense;
};

const formatDateFromIsoString = (isoString: string): string => {
  return new Date(isoString).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
};

const getIconType = (type: ExpenseType): ReactNode => {
  switch (type) {
    case "Travel":
      return <FlightTakeoff />;
    case "Food":
      return <RestaurantMenu />;
    default:
      return <Paid />;
  }
};

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const ExpenseCard: React.FC<Props> = ({ expense }) => {
  const navigate = useNavigate();

  return (
    <Sheet
      component="li"
      variant="outlined"
      sx={{ borderRadius: "sm", p: 2, listStyle: "none" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <IconButton sx={{ borderRadius: "sm" }} variant="soft" color="primary">
          {getIconType(expense.type)}
        </IconButton>
        <Box sx={{ flex: "1" }}>
          <Typography level="title-md">
            {" "}
            {USD.format(expense.amount)}
          </Typography>
          <Typography level="body-xs">{expense.merchant}</Typography>
        </Box>
        <IconButton onClick={() => navigate(`/expenses/${expense.id}`)}>
          <Edit />
        </IconButton>
      </Box>
      <Divider sx={{ my: 1 }}>
        <Chip variant="soft" color="neutral" size="sm">
          Note
        </Chip>
      </Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography level="body-xs">{expense.note}</Typography>
        <Typography level="body-xs">
          {formatDateFromIsoString(expense.date)}
        </Typography>
      </Box>
      {!session?.sub && (
        <>
          <Divider sx={{ my: 1 }}>
            <Chip variant="soft" color="neutral" size="sm">
              DEBUG
            </Chip>
          </Divider>
          <Box>
            <Typography level="body-xs">
              User ID: <strong>{expense.userId}</strong>
            </Typography>
          </Box>
        </>
      )}
    </Sheet>
  );
};
