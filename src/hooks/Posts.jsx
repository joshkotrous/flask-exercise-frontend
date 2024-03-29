import React from "react";

export async function GetAllPosts(token) {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/posts", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return response.json();
  } catch {}
}

export async function CreatePost(userId, content, token) {
  const request = {
    user_id: userId,
    content: content,
    likes: 0,
  };
  try {
    const response = await fetch("http://127.0.0.1:5000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(request),
    });
    return response;
  } catch {}
}

export async function LikePost(postId, token) {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/api/posts/" + postId + "/like",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response;
  } catch {}
}
