import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App.tsx';
import './index.css';

import { store } from '@store/rootStore';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@config/i18n.ts';
import { ThemeProvider } from '@mui/material';
import { baseTheme } from '@theme/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.Fragment>
        <Provider store={store}>
            <ThemeProvider theme={baseTheme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Provider>
    </React.Fragment>,
);
