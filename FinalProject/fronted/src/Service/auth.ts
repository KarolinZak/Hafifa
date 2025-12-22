import type { FormValues } from "../Types/formTypes";
import type { authResponse } from "../Types/authTypes";
import { Base64 } from "base64-string";

const apiUrl = import.meta.env.VITE_API_URL;

const enc = new Base64();

export const loginClient = async ({
  mail,
  password,
}: FormValues): Promise<void> => {
  const encPassword = enc.urlEncode(password!);
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password: encPassword }),
  });

  if (!res.ok) {
    throw new Error(`Login failed (${res.status})`);
  }
  const data: authResponse = await res.json();
  localStorage.setItem('token', data.token);
  
};

export const signupClient = async ({
  mail,
  password,
  firstName,
  lastName,
}: FormValues): Promise<void> => {
    const encPassword = enc.urlEncode(password!);

    const res = await fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password: encPassword, firstName, lastName }),
  });
  if (!res.ok) {
    throw new Error(`Signup failed (${res.status})`);
  
};
};