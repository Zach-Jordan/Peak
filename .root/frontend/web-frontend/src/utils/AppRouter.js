import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/authContext";

import Landing from "../pages/Landing";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import DashBoard from "../pages/DashBoard";
import PrivateRoute from "./PrivateRoutes";

export default function AppRouter() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Private Route */}
          <Route
            path="/dashboard"
            element={
              // <PrivateRoute>
              <DashBoard />
              // </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
