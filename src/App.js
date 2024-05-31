import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React from 'react';
import GuestList from './components/GuestList';

// Theme creation through Material-UI Library's function
const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ padding: '40px' }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Guest List App
          </Typography>
        </Box>
        <main>
          <GuestList />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
