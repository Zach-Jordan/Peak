import React from "react";
import Signup from "./pages/Signup";
import { AuthProvider } from "./contexts/authContext";
import AppRouter from "./utils/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
