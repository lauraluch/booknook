import { useEffect, useState } from "react";
import { useAuthContext } from "@contexts/useAuthContext";
import { useRouter } from "next/router";

export function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Hooks
  const { signIn, loading, error } = useAuthContext();
  const router = useRouter();

  function handleChangeUsername(username: string) {
    setUsername(username);
    setErrorMessage("");
  }

  function handleChangePassword(password: string) {
    setPassword(password);
    setErrorMessage("");
  }

  async function handleLogin() {
    try {
      await signIn(username, password);
    } catch (error) {
      console.log("[handleLogin]: ", error.response);
    }
  }

  function handleSignupClick() {
    router.push("/signup");
  }

  useEffect(() => {
    setErrorMessage(error);
  }, [error]);

  return {
    username,
    handleChangeUsername,
    password,
    handleChangePassword,
    handleLogin,
    errorMessage,
    loading,
    handleSignupClick,
  };
}
