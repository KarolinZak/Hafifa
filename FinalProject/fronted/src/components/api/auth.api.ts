import type { FormValues } from "../Form/Form.types";
import type { authResponse } from "./auth.types";
import { Base64 } from "base64-string";

const apiUrl = import.meta.env.VITE_API_URL;

const enc = new Base64();

export const loginClient = async ({
  mail,
  password,
}: FormValues): Promise<authResponse | undefined> => {
  try {
    const encPassword = enc.urlEncode(password!);
    const res = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ mail, password: encPassword }),
    });
    return res.json() as Promise<authResponse>;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
  
};

export const signupClient = async ({
  mail,
  password,
  firstName,
  lastName,
}: FormValues): Promise<authResponse | undefined> => {
  try {
  const encPassword = enc.urlEncode(password!);
  const res = await fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, password: encPassword, firstName, lastName }),
  });
  return res.json() as Promise<authResponse>;

 } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
  
};
