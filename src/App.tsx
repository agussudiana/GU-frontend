import './App.css';
import { Container } from '@mui/material';
import { Main } from './components/main/Main';
import { MachineProvider } from './providers/MachineProvider';

function App() {
  return (
    <Container>
      <MachineProvider>
            <Main/>
      </MachineProvider>
    
    </Container>
  );
}

export default App;
