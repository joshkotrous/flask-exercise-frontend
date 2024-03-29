import { React, useEffect } from "react";
import { Button, Link } from "@nextui-org/react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";

export const Home = (props) => {
  const navigateTo = useNavigate();
  if (props.isLoggedIn) {
    navigateTo("/posts");
  }

  console.log(props.isLoggedIn);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex gap-4">
        <Link href="/login">
          <Button color="primary">Login</Button>
        </Link>
        <Link href="/create-account">
          <Button color="default">Create Account</Button>
        </Link>
      </div>
    </div>
  );
};
