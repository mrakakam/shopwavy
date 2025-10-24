import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 🧭 import router
import "./index.css";
import App from "./App.jsx";
import { SignUp } from "./components/Signup.jsx"; // 🆕 import your SignUp component
import { Login } from "./components/Login.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 🧭 Wrap everything inside BrowserRouter */}
    <BrowserRouter>
      <Routes>
        {/* 🏠 Home page (your main App) */}
        <Route path="/" element={<App />} />

        {/* 🆕 Sign Up page */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
