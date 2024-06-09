// External Libraries
import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useState,
} from "react";

// Types
import { AuthContextData, IAuthUser } from "./types";
import { postLogin } from "@services/api/login";
import { mapLoginErrorMessages } from "@pages/Signin/hooks/useLogin/utils";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // States
  const [user, setUser] = useState<IAuthUser>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Functions
  async function signIn(username: string, password: string): Promise<number> {
    try {
      setLoading(true);
      const response = await postLogin({
        username: username.trim(),
        password: password.trim(),
      });

      setUser({ userId: response.userId });
      setError(null);
      return response.userId;
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
  }

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

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
