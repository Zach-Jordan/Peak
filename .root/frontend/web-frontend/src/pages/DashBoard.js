import React, { useState } from "react";
import Logout from "../components/Logout";
import { useAuth } from "../contexts/authContext";
import ProfileForm from "../components/ProfileForm";

function DashBoard() {
  // const [user, setUser] = useState(undefined);

  const { user: currentUser } = useAuth();

  if (currentUser === undefined) {
    return <h1>Loading...</h1>; // Still loading
  }

  if (currentUser === null) {
    return <h1>Please log in to access the dashboard.</h1>; // Not logged in
  }

  return (
    <div>
      <h1>Welcome to your dashboard!</h1>
      <p>Your email is: {currentUser.email}</p>
      <ProfileForm currentUser={currentUser} />
      <Logout />
    </div>
  );
}

export default DashBoard;
