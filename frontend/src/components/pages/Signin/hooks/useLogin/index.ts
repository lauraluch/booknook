import { postLogin } from "@services/api/login";
import { useEffect, useState } from "react";
import { mapLoginErrorMessages } from "./functions";

export function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
      const response = await postLogin({
        username: username,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log("[handleLogin]: ", error.response);
      setErrorMessage(mapLoginErrorMessages(error.response.status));
    }
  }

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  return {
    username,
    handleChangeUsername,
    password,
    handleChangePassword,
    handleLogin,
    errorMessage,
  };
}
