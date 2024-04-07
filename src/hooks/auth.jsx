import Cookies from "js-cookie";

export async function Auth(
  email,
  password,
  setIsLoading,
  setIsLoggedIn,
  navigate
) {
  if (typeof setIsLoading === "function") {
    setIsLoading(true);
  }

  const request = {
    username: email,
    password: password,
  };
  try {
    const response = await fetch(
      import.meta.env.VITE_REACT_APP_API_BASE_URL + "/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
        cache: "default",
      }
    );
    const data = await response.json();
    const token = data.token;
    const userId = data.userId;
    if (typeof setIsLoggedIn === "function") {
      setIsLoggedIn(true);
    }

    Cookies.set("token", token);
    Cookies.set("userId", userId);
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
