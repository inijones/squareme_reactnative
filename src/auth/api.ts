import { AuthToken } from "./types";

export async function loginApi(email: string, password: string): Promise<AuthToken> {
  const res = await fetch("https://api.example.com/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}

