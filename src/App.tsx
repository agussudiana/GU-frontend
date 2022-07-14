import "./App.css";
import { Container, CssBaseline } from "@mui/material";
import { Main } from "./components/main/Main";
import { MachineProvider } from "./providers/MachineProvider";
import { AnomalyProvider } from "./providers/AnomalyProvider";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <MachineProvider>
          <AnomalyProvider>
            <Main />
          </AnomalyProvider>
        </MachineProvider>
      </Container>
    </>
  );
}

export default App;
