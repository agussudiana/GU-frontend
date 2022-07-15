import "./App.css";
import { Container, CssBaseline } from "@mui/material";
import { Main } from "./components/main/Main";
import { MachineProvider } from "./providers/MachineProvider";
import { AnomalyProvider } from "./providers/AnomalyProvider";
import { ToastProvider } from "./providers/ToastProvider";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <ToastProvider>
          <MachineProvider>
            <AnomalyProvider>
              <Main />
            </AnomalyProvider>
          </MachineProvider>
        </ToastProvider>
      </Container>
    </>
  );
}

export default App;
