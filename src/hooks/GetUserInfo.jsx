import React from "react";

export async function GetUserInfo(userId, token) {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/users/" + userId, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJ0ZXN0In0.kUPDwe4IY01rLb-oStd9RozicnhOI-YcKhU0uhcgKis",
      },
      cache: "default",
    });

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
    const response = await fetch("http://127.0.0.1:5000/api/users/" + userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJ0ZXN0In0.kUPDwe4IY01rLb-oStd9RozicnhOI-YcKhU0uhcgKis",
      },
      body: JSON.stringify(request),
    });
    console.log(response);
    if (typeof isLoading === "function") {
      isLoading(false);
    }
    return response;
  } catch {}
  return;
}
