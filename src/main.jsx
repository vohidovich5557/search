import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-loading-skeleton/dist/skeleton.css'
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryclient } from "./config/query-client.js";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryclient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
