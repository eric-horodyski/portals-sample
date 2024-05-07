import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Tasks from "./pages/Tasks";

const App: React.FC = () => (
  <CssVarsProvider>
    <CssBaseline />
    <Tasks />
  </CssVarsProvider>
);
export default App;
