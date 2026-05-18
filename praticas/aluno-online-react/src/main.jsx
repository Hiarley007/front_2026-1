<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
>>>>>>> 5d0d3e984a52e345e8fd3b40a39e7ccdd24766bf

createRoot(document.getElementById("root")).render(
  <StrictMode>
<<<<<<< HEAD
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
=======
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider> 
    </BrowserRouter>
>>>>>>> 5d0d3e984a52e345e8fd3b40a39e7ccdd24766bf
  </StrictMode>,
);
