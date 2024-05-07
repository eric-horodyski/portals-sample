import { Outlet } from "react-router-dom";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

const App: React.FC = () => {
  return (
    <CssVarsProvider>
      <CssBaseline />
      <Outlet />
    </CssVarsProvider>
  );
};
export default App;
