import type { FormValues } from "../Form/Form.types";
import type { authResponse } from "./api.types";
import { Base64 } from 'base64-string';

const API_URL = "http://localhost:3000";
const enc = new Base64();

export const loginClient = async (
  {mail, password} : FormValues
): Promise<authResponse> => {
  const encPassword = enc.urlEncode(password);
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({ mail, encPassword }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw new Error(error?.message ?? "Login failed");
  }

  return res.json() as Promise<authResponse>;
}

export const signinClient =  async (
  {mail, password, firstName, lastName} : FormValues
): Promise<authResponse> => {
  const encPassword = enc.urlEncode(password);
  const res = await fetch(`${API_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mail, 'password': encPassword, firstName, lastName }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => null);
    throw new Error(error?.message ?? "Signin failed");
  }

  return res.json() as Promise<authResponse>;
}

