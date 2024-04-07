import "./App.css";
import { useState, useEffect } from "react";
import { AppRoutes } from "./AppRoutes";
import { Navigation } from "./components/Navigation";
import { NextUIProvider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedIn = () => {
    if (Cookies.get("token") != null) {
      setIsLoggedIn(true);
      console.log(Cookies.get("token"));
      console.log(Cookies.get("userId"));
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, [isLoggedIn]);

  return (
    <NextUIProvider navigate={navigate}>
      <Navigation isLoggedIn={isLoggedIn} />

      <AppRoutes
        setIsLoggedIn={setIsLoggedIn}
        isLoggedIn={isLoggedIn}
        userId={Cookies.get("userId")}
        token={Cookies.get("token")}
      />
    </NextUIProvider>
  );
}

export default App;
