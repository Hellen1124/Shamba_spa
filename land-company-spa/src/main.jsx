
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

console.log("🚀 main.jsx running...");
const rootElement = document.getElementById("root");
console.log("🔍 Root element:", rootElement);

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  console.log("✅ React mounted!");
} else {
  console.error("❌ Root element not found!");
}
