import "./App.css";
import { useState, useEffect } from "react";
import { AppRoutes } from "./AppRoutes";
import { Navigation } from "./components/Navigation";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedIn = () => {
    if (Cookies.get("token") != null) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <NextUIProvider navigate={navigate}>
      <Navigation isLoggedIn={isLoggedIn} />

      <div className="flex flex-col justify-center items-center h-screen">
        <AppRoutes setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      </div>
    </NextUIProvider>
  );
}

export default App;
