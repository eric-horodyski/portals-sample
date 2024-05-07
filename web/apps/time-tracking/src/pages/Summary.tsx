import { Layout } from "@jobsync/ui";
import { Card, CardContent, Typography, List } from "@mui/joy";
import { publishNavigateBackMessage } from "@jobsync/portals";
import { DailyPieChart } from "../components/DailyPieChart";
import { WorkHistoryItem } from "../components/WorkHistoryItem";
import { getWorkHistory } from "../api";

const Summary: React.FC = () => {
  const workHistory = getWorkHistory();
  const historyLength = workHistory.length - 1;

  return (
    <Layout>
      <Layout.Header>
        <Layout.BackButton onClick={publishNavigateBackMessage} />
        <Layout.Title title="Time Tracking" />
      </Layout.Header>
      <Layout.Content>
        <DailyPieChart />
        <Card>
          <CardContent>
            <Typography level="h3" sx={{ mb: 0.5 }}>
              Work History
            </Typography>
            <List>
              {workHistory.map(({ id, date, minutesWorked }, idx) => (
                <WorkHistoryItem
                  key={id}
                  isLastItem={idx === historyLength}
                  date={date}
                  minutesWorked={minutesWorked}
                />
              ))}
            </List>
          </CardContent>
        </Card>
      </Layout.Content>
    </Layout>
  );
};
export default Summary;
