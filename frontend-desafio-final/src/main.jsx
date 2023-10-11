import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import UserContextProvider from "../context/UserContext.jsx"
import OperationsContextProvider from "../context/OperationsContext.jsx";

import './index.css'

import { BrowserRouter } from "react-router-dom"
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FavoritesProvider } from "../context/FavoritesContext.jsx";

import AuthProvider from '../context/AuthContext.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000e35",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <UserContextProvider>
            <OperationsContextProvider>
              <FavoritesProvider>
                <App />
              </FavoritesProvider>
            </OperationsContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode >
);