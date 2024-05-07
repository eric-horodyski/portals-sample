import { IconButton } from "@mui/joy";
import { ArrowBack } from "@mui/icons-material";

export const BackButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <IconButton className="BackButton" onClick={onClick}>
    <ArrowBack />
  </IconButton>
);
