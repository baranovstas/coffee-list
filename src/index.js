import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

import App from './components/App/App';

import store from './store/configureStore';

const theme = createTheme({
  breakpoints: { values: { md: 577, lg: 1025, sm: 320 } }
});

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);