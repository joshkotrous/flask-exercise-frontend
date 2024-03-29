import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { CreateAccount } from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";

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
      <Route
        path="/posts"
        element={<Dashboard isLoggedIn={props.isLoggedIn} />}
      />
      <Route
        path="/settings"
        element={<Dashboard isLoggedIn={props.isLoggedIn} />}
      />
      <Route
        path="/users"
        element={<Dashboard isLoggedIn={props.isLoggedIn} />}
      />
    </Routes>
  );
};
