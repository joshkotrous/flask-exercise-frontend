import React from "react";

export async function GetUserInfo(userId, token) {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + "/users/" + userId,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
        cache: "default",
      }
    );

    return response.json();
  } catch {}
  return;
}

export async function UpdateUserInfo(
  userId,
  token,
  username,
  email,
  first_name,
  last_name,
  isLoading
) {
  const request = {
    username: username,
    email: email,
    first_name: first_name,
    last_name: last_name,
  };
  try {
    if (typeof isLoading === "function") {
      isLoading(true);
    }
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + "/users/" + userId,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(request),
      }
    );
    console.log(response);
    if (typeof isLoading === "function") {
      isLoading(false);
    }
    return response;
  } catch {}
  return;
}

export async function GetAllUsers(token) {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + "/users",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
        cache: "default",
      }
    );
    return response.json();
  } catch {}
  return;
}
