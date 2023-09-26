import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import UserContextProvider from "../context/UserContext"
import OperationsContextProvider from "../context/OperationsContext";
import { BrowserRouter } from "react-router-dom"
import './index.css'

import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
              <App />
            </OperationsContextProvider>
          </UserContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode >,
);