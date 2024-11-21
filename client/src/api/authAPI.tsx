import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const res = await fetch("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(`Error: ${errorData.message}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("Error from user login:", error);
    return Promise.reject("Could not fetch user info.");
  }
}

export { login };
