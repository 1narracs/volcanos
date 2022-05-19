import React from "react";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

function Logout() {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    localStorage.removeItem("token");
    setUser(false);
    navigate(`/`);
  }, []);

  return <div>Logging you out...</div>;
}

export default Logout;
