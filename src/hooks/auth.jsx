import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export async function Auth(
  email,
  password,
  setIsLoading,
  setIsLoggedIn,
  navigate
) {
  // const navigateTo = useNavigate();
  if (typeof setIsLoading === "function") {
    setIsLoading(true);
  }

  const request = {
    username: email,
    password: password,
  };
  console.log(JSON.stringify(request));
  try {
    const response = await fetch("http://127.0.0.1:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
      cache: "default",
    });
    const data = await response.json();
    const token = data.token;
    const userId = data.userId;
    const userEmail = data.email;
    const username = data.username;
    if (typeof setIsLoggedIn === "function") {
      setIsLoggedIn(true);
    }
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("username", username);
    Cookies.set("token", token);
    Cookies.set("userId", userId);
    console.log(Cookies.get("userId"));
    console.log("Token created: " + localStorage.getItem("token"));
    console.log(
      "User Info: " +
        localStorage.getItem("userId") +
        " " +
        localStorage.getItem("username") +
        " " +
        localStorage.getItem("userEmail")
    );
    if (typeof navigate === "function") {
      navigate();
    }
    // Handle successful response here
  } catch (error) {
    console.error("Error:", error);
    // Handle error here
  } finally {
    if (typeof setIsLoading === "function") {
      setIsLoading(true);
    }
  }
}

export function SignOut() {
  if (Cookies.get("token") != null) {
    Cookies.remove("token");
    window.location.reload();
  }
}

export function checkIsLoggedIn() {
  if (Cookies.get("token") != null) {
    return true;
  }

  return false;
}
