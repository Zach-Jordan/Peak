import React from "react";
import { logOut } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();

      console.log("User logged out");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
