import { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../hooks/Auth";

export const CreateAccount = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const navigateTo = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "username") {
      setUsername(value);
    }
  };

  const createAccount = async (props) => {
    setIsLoading(true);
    const request = {
      username: username,
      email: email,
      password: password,
    };
    console.log(JSON.stringify(request));
    try {
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_API_BASE_URL + "/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.REACT_API_API_KEY,
          },
          body: JSON.stringify(request),
          cache: "default",
        }
      );
      console.log(response.status);
      Auth(email, password, null, props.setIsLoggedIn);
      navigateTo("/");

      // Handle successful response here
    } catch (error) {
      console.error("Error:", error);
      // Handle error here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <Input
          name="username"
          isClearable
          type="username"
          label="Username"
          variant="bordered"
          placeholder="Enter your username"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
          isRequired
          value={username}
          onChange={handleChange}
        />
        <Input
          name="email"
          isClearable
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
          onClear={() => console.log("input cleared")}
          className="max-w-xs"
          isRequired
          value={email}
          onChange={handleChange}
        />
        <Input
          name="password"
          isClearable
          label="Password"
          variant="bordered"
          placeholder="Enter your password"
          type="password"
          className="max-w-xs"
          isRequired
          value={password}
          onChange={handleChange}
        />

        <Button color="primary" onClick={createAccount} isLoading={isLoading}>
          Create Account
        </Button>
      </div>
    </div>
  );
};
