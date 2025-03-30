import React, { useState, useEffect } from "react";
import { logIn } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Check authentication state on component mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is already logged in:", user);
        setIsLoggedIn(true);
        navigate("/dashboard"); // Redirect if logged in
      } else {
        setIsLoggedIn(false);
      }
    });
    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const user = await logIn(email, password);
      console.log("User Logged in successfully:", user);
      setError("");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error: ", error);
      setError("Failed to log in. Please check your email and password.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoggedIn) {
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
