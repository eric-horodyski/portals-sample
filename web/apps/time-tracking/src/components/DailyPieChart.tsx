import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
  Typography,
} from "@mui/joy";
import { AccessTimeFilled } from "@mui/icons-material";

const getFormattedDate = (date: Date): string => {
  const opts = { weekday: "long", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", opts as Intl.DateTimeFormatOptions);
};

const formatTime = (secondsWorked: number): string => {
  const hours = String(Math.floor(secondsWorked / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secondsWorked % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(secondsWorked % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const DailyPieChart = () => {
  const [secondsWorked, setSecondsWorked] = useState<number>(23400);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const formattedWorkedTime = formatTime(secondsWorked);

  useEffect(() => {
    let intervalId: number;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSecondsWorked((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);

  return (
    <Card variant="solid" color="primary" invertedColors sx={{ mb: 2 }}>
      <CardContent orientation="horizontal">
        <CircularProgress
          determinate
          value={75}
          sx={{ "--CircularProgress-size": "100px" }}
        >
          <AccessTimeFilled />
        </CircularProgress>
        <CardContent sx={{ px: 1, justifyContent: "center" }}>
          <Typography level="body-md">
            {getFormattedDate(new Date())}
          </Typography>
          <Typography level="h1" sx={{ lineHeight: 1 }}>
            {formattedWorkedTime}
          </Typography>
          <Typography level="body-sm">Time worked today</Typography>
        </CardContent>
      </CardContent>
      <CardActions>
        <Button onClick={() => (isRunning ? stopTimer() : startTimer())}>
          {isRunning ? "Take a break" : "Clock back in"}
        </Button>
      </CardActions>
    </Card>
  );
};
