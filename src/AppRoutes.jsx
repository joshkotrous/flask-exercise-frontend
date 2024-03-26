import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";

export const AppRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home isLoggedIn={props.isLoggedIn} />} />
      <Route
        path="/login"
        element={
          <Login
            setIsLoggedIn={props.setIsLoggedIn}
            isLoggedIn={props.isLoggedIn}
          />
        }
      />
      <Route
        path="/create-account"
        element={
          <CreateAccount
            setIsLoggedIn={props.setIsLoggedIn}
            isLoggedIn={props.isLoggedIn}
          />
        }
      />
    </Routes>
  );
};
