import { Box, BoxProps } from "@mui/joy";

export const Header: React.FC<BoxProps> = (props: BoxProps) => (
  <Box
    component="header"
    className="Header"
    {...props}
    sx={[
      {
        p: 1,
        gap: 1.5,
        bgcolor: "background.surface",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumn: "1 / -1",
        borderBottom: "1px solid",
        borderColor: "divider",
        position: "sticky",
        top: 0,
        zIndex: 1100,
      },
    ]}
  />
);
