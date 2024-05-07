import {
  Box,
  IconButton,
  ListItem,
  ColorPaletteProp,
  Typography,
  LinearProgress,
} from "@mui/joy";
import { Settings } from "@mui/icons-material";
import { Task, getCategoryColor } from "../api";

interface Props {
  task: Task;
}

export const TaskListItem: React.FC<Props> = ({ task }) => {
  const color = getCategoryColor(task.category) as ColorPaletteProp;

  return (
    <ListItem sx={{ p: 0, my: 1 }}>
      <IconButton color={color} variant="solid" sx={{ my: 1, mr: 2 }}>
        <Settings />
      </IconButton>
      <Box sx={{ width: "100%" }}>
        <Typography level="title-md">{task.title}</Typography>
        <LinearProgress
          sx={{ my: 1 }}
          determinate
          color={color}
          thickness={3}
          value={task.percentComplete}
        />
      </Box>
    </ListItem>
  );
};
