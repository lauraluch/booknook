import { postLogin } from "@services/api/login";
import { useState } from "react";

export function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeUsername(username: string) {
    setUsername(username);
  }

  function handleChangePassword(password: string) {
    setPassword(password);
  }

  async function handleLogin() {
    try {
      const response = await postLogin({
        username: username,
        password: password,
      });
      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  }

  return {
    username,
    handleChangeUsername,
    password,
    handleChangePassword,
    handleLogin,
  };
}
