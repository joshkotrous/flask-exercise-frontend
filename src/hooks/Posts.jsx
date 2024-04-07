export async function GetAllPosts(userId, token) {
  try {
    const response = await fetch(
      import.meta.env.VITE_REACT_APP_API_BASE_URL + "/posts/" + userId,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.json();
  } catch {}
}

export async function CreatePost(userId, content, token, attachments) {
  const request = {
    user_id: userId,
    content: content,
    attachments: attachments,
  };
  console.log(request);
  try {
    const response = await fetch(
      import.meta.env.VITE_REACT_APP_API_BASE_URL + "/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(request),
      }
    );
    return response;
  } catch {}
}

export async function LikePost(userId, postId, token) {
  const request = {
    user_id: userId,
    post_id: postId,
  };
  try {
    const response = await fetch(
      import.meta.env.VITE_REACT_APP_API_BASE_URL + "/posts/like",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(request),
      }
    );
    return response;
  } catch {}
}
