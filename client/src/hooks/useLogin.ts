import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const LOGIN_API_URL = "http://localhost:8080/api/v1/users/login";

export const useLogin = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext not found");
  }

  const { setIsAuthenticated } = authContext;

  const login = async (email: string, password: string) => {
    try {
      await axios.post(
        LOGIN_API_URL,
        { email, password },
        { withCredentials: true },
      );
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return { login };
};
