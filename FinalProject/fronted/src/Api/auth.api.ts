import type { FormValues } from "../Types/formTypes";
import type { authResponse } from "../Types/authTypes";
import { Base64 } from "base64-string";

const apiUrl = import.meta.env.VITE_API_URL;

const enc = new Base64();

export const loginClient = async ({
  mail,
  password,
}: FormValues): Promise<string> => {
  const encPassword = enc.urlEncode(password!);
  console.log(mail)
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password: encPassword }),
  });


  if (!res.ok) {
    
    const errorBody = await res.json().catch(() => null);
    console.log(errorBody?.message);
    throw new Error(
      errorBody?.message || `Login failed (${res.status})`
    );
  }
  const data: string = await res.json();
  return data;
  
};

export const signupClient = async ({
  mail,
  password,
  firstName,
  lastName,
}: FormValues): Promise<authResponse> => {
  const encPassword = enc.urlEncode(password!);

  const res = await fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password: encPassword, firstName, lastName }),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    throw new Error(errorBody?.message || `Signup failed (${res.status})`);
  }

  return res.json();
};

