import { Typography } from "@mui/joy";

export const Title: React.FC<{ title: string }> = ({ title }) => (
  <Typography component="h1" fontWeight="xl" sx={{ flex: "1" }}>
    {title}
  </Typography>
);
