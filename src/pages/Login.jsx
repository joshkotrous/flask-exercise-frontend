import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Auth } from "../hooks/Auth";

export const Login = (props) => {
  const navigateTo = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
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
          <Button color="success" isLoading={isLoading}>
            <FaCheck />
          </Button>
        ) : (
          <Button
            color="primary"
            onClick={() =>
              Auth(
                email,
                password,
                setIsLoading,
                props.setIsLoggedIn,
                navigateTo("/")
              )
            }
            isLoading={isLoading}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};
