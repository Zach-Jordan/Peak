import React, { useRef, useState } from "react";
import { signUp } from "../services/AuthServices";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const passwordConfirmRef = useRef();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const user = await signUp(email, password);
      console.log("User signed up successfully:", user);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="email"
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
        {/* <input
        type="password"
        ref={passwordConfirmRef}
        placeholder="Password"
        required
      /> */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
