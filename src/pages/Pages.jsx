import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Pages;
