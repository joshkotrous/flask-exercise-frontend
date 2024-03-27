import { React, useState } from "react";
import { Input, Button, user } from "@nextui-org/react";
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

  //   const login = async () => {
  //     setIsLoading(true);
  //     const request = {
  //       username: email,
  //       password: userPassword,
  //     };
  //     try {
  //       const response = await fetch("http://127.0.0.1:5000/api/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(request),
  //         cache: "default",
  //       });
  //       const data = await response.json();
  //       const token = data.token;
  //       const userId = data.userId;
  //       const userEmail = data.email;
  //       const username = data.username;
  //       props.setIsLoggedIn(true);
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("userId", userId);
  //       localStorage.setItem("userEmail", userEmail);
  //       localStorage.setItem("username", username);
  //       Cookies.set("token", token);

  //       console.log("Token created: " + localStorage.getItem("token"));
  //       console.log(
  //         "User Info: " +
  //           localStorage.getItem("userId") +
  //           " " +
  //           localStorage.getItem("username") +
  //           " " +
  //           localStorage.getItem("userEmail")
  //       );
  //       navigateTo("/");

  //       // Handle successful response here
  //     } catch (error) {
  //       console.error("Error:", error);
  //       // Handle error here
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

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
            onClick={
              () =>
                Auth(
                  email,
                  password,
                  setIsLoading,
                  props.setIsLoggedIn,
                  navigateTo("/")
                )
              // navigateTo("/");
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
