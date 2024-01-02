import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecoveryPage from "./components/routes/RecoveryPage";
import ContactPage from "./components/routes/ContactPage";
import CloudPage from "./components/routes/CloudPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<RecoveryPage />} />
      <Route path="/cloud" element={<CloudPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>
);
