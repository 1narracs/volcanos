import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Logout from "./Logout";
import Volcano from "./Volcano";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/volcano" element={<Volcano/>} />
    </Routes>
  );
}

export default Pages;
