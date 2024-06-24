import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';
import { AppRouter } from './app/router/AppRouter.tsx';

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
