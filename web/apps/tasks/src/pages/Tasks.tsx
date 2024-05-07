import { Layout } from "@jobsync/ui";
import { Box, Card, Divider, Typography, List } from "@mui/joy";
import { publishNavigateBackMessage } from "@jobsync/portals";
import { CategorySummaryCard } from "../components/CategorySummaryCard";
import { TaskListItem } from "../components/TaskListItem";
import { getCategorySummaries, getTasks } from "../api";

const Tasks: React.FC = () => {
  const categories = getCategorySummaries();
  const tasks = getTasks();

  return (
    <Layout>
      <Layout.Header>
        <Layout.BackButton onClick={publishNavigateBackMessage} />
        <Layout.Title title="Tasks" />
      </Layout.Header>
      <Layout.Content>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          {categories.map((props, idx) => (
            <CategorySummaryCard
              key={idx}
              {...props}
              isFirstElement={idx === 0}
              isLastElement={idx === categories.length - 1}
            />
          ))}
        </Box>
        <Card>
          <Typography color="neutral" level="title-lg">
            Your Tasks
          </Typography>
          <Divider sx={{ mt: 1, mx: 0 }} />
          <List sx={{ p: 0, m: 0 }}>
            {tasks.map((task) => (
              <TaskListItem key={task.id} task={task} />
            ))}
          </List>
        </Card>
      </Layout.Content>
    </Layout>
  );
};
export default Tasks;
