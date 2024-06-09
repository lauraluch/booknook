import { postLogin } from "@services/api/login";
import { useEffect, useState } from "react";
import { mapLoginErrorMessages } from "./utils";
import { useRouter } from "next/router";
import { useAuthContext } from "@contexts/useAuthContext";

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
      const response = await signIn(username, password);

      if (response) router.push(`/books/${response}`);
    } catch (error) {
      console.log("[handleLogin]: ", error.response);
    }
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
  };
}
