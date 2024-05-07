import { WorkHistory } from "@mui/icons-material";
import {
  ListItem,
  ListItemDecorator,
  ListItemContent,
  Typography,
  IconButton,
} from "@mui/joy";

interface Props {
  isLastItem: boolean;
  date: Date;
  minutesWorked: number;
}

const decorationLine = {
  "&:before": {
    content: '""',
    position: "absolute",
    height: "100%",
    width: "1px",
    bgcolor: "divider",
    left: "calc(var(--ListItem-paddingLeft) + 28px)",
    top: "50%",
  },
};

const formatDateAsMonthDay = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const formatTimeAsHoursMinutes = (minutesWorked: number): string => {
  const hours = Math.floor(minutesWorked / 60);
  const minutes = minutesWorked % 60;

  const hoursString = hours > 0 ? `${hours} hour${hours === 1 ? "" : "s"}` : "";
  const minutesString =
    minutes > 0 ? `${minutes} minute${minutes === 1 ? "" : "s"}` : "";

  return hoursString && minutesString
    ? `${hoursString} and ${minutesString}`
    : hoursString || minutesString;
};

export const WorkHistoryItem: React.FC<Props> = ({
  isLastItem,
  date,
  minutesWorked,
}) => (
  <ListItem sx={{ pb: 1.5 }}>
    <ListItemDecorator sx={!isLastItem ? decorationLine : {}}>
      <IconButton
        sx={{ borderRadius: "sm", height: 56, width: 56 }}
        variant="soft"
        color="primary"
      >
        <WorkHistory />
      </IconButton>
    </ListItemDecorator>
    <ListItemContent sx={{ ml: 2 }}>
      <Typography fontStyle="h4">{formatDateAsMonthDay(date)}</Typography>
      <Typography level="body-sm">
        {formatTimeAsHoursMinutes(minutesWorked)}
      </Typography>
    </ListItemContent>
  </ListItem>
);
