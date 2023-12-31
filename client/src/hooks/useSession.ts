import { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

const SESSION_API_URL = "http://localhost:8080/api/v1/users/session";

export const useSession = () => {
  const { setIsAuthenticated, setLoading } = useContext(AuthContext) ?? {};

  useEffect(() => {
    const checkSession = async () => {
      try {
        await axios.get(SESSION_API_URL, { withCredentials: true });
        setIsAuthenticated?.(true);
      } catch (error) {
        setIsAuthenticated?.(false);
      } finally {
        setLoading?.(false);
      }
    };

    checkSession();
  }, [setIsAuthenticated, setLoading]);

  return {};
};
