import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { Colors, GlobalStyles } from './Theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={Colors}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
