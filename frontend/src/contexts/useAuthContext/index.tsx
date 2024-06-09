// External Libraries
import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";

// Types
import { AuthContextData, IAuthUser } from "./types";
import { postLogin } from "@services/api/login";
import { mapLoginErrorMessages } from "@pages/Signin/hooks/useLogin/utils";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // States
  const [user, setUser] = useState<IAuthUser>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Functions
  async function signIn(username: string, password: string): Promise<void> {
    try {
      setLoading(true);
      const response = await postLogin({
        username: username.trim(),
        password: password.trim(),
      });

      setUser({ userId: response.userId });
      setError(null);

      if (response && response.token) {
        Cookies.set("token", response.token, { expires: 1 });
      }
    } catch (error) {
      console.log("[signIn]: ", error.response);
      setError(mapLoginErrorMessages(error.response.status));
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  function signOut(): void {
    setUser(null);
    Cookies.remove("token");
    router.push("/");
  }

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);

    if (token) {
      const decoded = jwt.decode(token) as any;
      console.log(decoded);
      setUser({ userId: decoded.id });
    }
  }, []);

  useEffect(() => {
    if (user) {
      router.push(`/books/${user.userId}`);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext);

  if (!Object.keys(context)?.length) {
    throw new Error("useAuthContext must be within a ContextProvider");
  }

  return context;
}

export { AuthContextProvider, useAuthContext };
