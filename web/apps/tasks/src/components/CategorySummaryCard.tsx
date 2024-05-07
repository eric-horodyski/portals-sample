import { Card, ColorPaletteProp, Typography } from "@mui/joy";
import { CategoryType, getCategoryColor } from "../api";

interface Props {
  label: CategoryType;
  total: number;
  isFirstElement: boolean;
  isLastElement: boolean;
}

export const CategorySummaryCard: React.FC<Props> = ({
  label,
  total,
  isFirstElement,
  isLastElement,
}) => {
  const color = getCategoryColor(label) as ColorPaletteProp;
  const ml = isFirstElement ? 0 : 1;
  const mr = isLastElement ? 0 : 1;

  return (
    <Card sx={[{ p: 1, width: "100%", mx: 1 }, { ml }, { mr }]}>
      <Typography
        level="title-sm"
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          fontSize: 12,
          m: 0,
        }}
      >
        {label}
      </Typography>
      <Typography level="h1" color={color} sx={{ lineHeight: 1 }}>
        {total}
      </Typography>
    </Card>
  );
};
