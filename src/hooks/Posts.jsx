import React from "react";

export async function GetAllPosts(userId, token) {
  try {
    const response = await fetch("http://127.0.0.1:5000/api/posts/" + userId, {
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

export async function LikePost(userId, postId, token) {
  const request = {
    user_id: userId,
    post_id: postId,
  };
  try {
    const response = await fetch("http://127.0.0.1:5000/api/posts/like", {
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
