import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Summary from "./pages/Summary";

const App: React.FC = () => (
  <CssVarsProvider>
    <CssBaseline />
    <Summary />
  </CssVarsProvider>
);
export default App;
