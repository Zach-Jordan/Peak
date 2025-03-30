import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>SplitStack</h1>
      <p>A platform for connecting and organizing workspaces</p>
      <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link>
    </div>
  );
}
