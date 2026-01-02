import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import '../styles/classes.css';
import '../styles/colors.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SpeedInsights/>
    <App />
  </BrowserRouter>
);
