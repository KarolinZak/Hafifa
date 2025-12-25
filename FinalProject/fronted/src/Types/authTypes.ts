import type { User } from "./user.Types";
import { createContext } from "react";

export interface authResponse {
  token: string;
  user: User;
}

export interface AuthContextType {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
