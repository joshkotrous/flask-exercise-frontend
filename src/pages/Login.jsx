import { useState, useEffect } from "react";
import { Input, Button } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import { Auth } from "../hooks/Auth";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  const navigateTo = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  useEffect(() => {
    if (props.isLoggedIn) {
      navigateTo("/");
    }
  }, [props.isLoggedIn, loginErrorMessage]);
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="flex flex-col gap-4">
        <Input
          isRequired
          isClearable
          name="email"
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
          value={email}
          onChange={handleChange}
        />
        <Input
          isRequired
          isClearable
          name="password"
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          type="password"
          className="max-w-xs"
          value={password}
          onChange={handleChange}
        />
        {props.isLoggedIn ? (
          <Button color="success">
            <FaCheck />
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() =>
              Auth(
                email,
                password,
                props.setIsLoggedIn,
                setLoginFailed,
                setLoginErrorMessage
              )
            }
          >
            Login
          </Button>
        )}
        {loginFailed ? (
          <p className="text-red-500">{loginErrorMessage}</p>
        ) : null}
      </div>
    </div>
  );
};
