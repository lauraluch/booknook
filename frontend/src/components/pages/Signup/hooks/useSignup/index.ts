import { useEffect, useState } from "react";
import { IBackUser } from "src/types/user/IBackUser";

export function useSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [biography, setBiography] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleUsernameChange(value: string) {
    setUsername(value);
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
  }

  function handleConfirmPasswordChange(value: string) {
    setConfirmPassword(value);
  }

  function handleBiographyChange(value: string) {
    setBiography(value);
  }

  function handleBirthDateChange(value: string) {
    setBirthDate(value);
  }

  function checkPasswordValidity() {
    if (password && password.length < 4) {
      setErrorMessage("A senha deve ter no mínimo 4 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("As senhas não condizem.");
      return;
    }
    setErrorMessage("");
  }

  async function handleCreateUser() {
    const user: IBackUser = {
      username: username,
      password: password,
      biography: biography,
      creationDate: Date.now().toString(),
      birthDate: Date.now().toString(),
    };
  }

  useEffect(() => {
    checkPasswordValidity();
  }, [password, confirmPassword]);

  return {
    username,
    handleUsernameChange,
    password,
    handlePasswordChange,
    confirmPassword,
    handleConfirmPasswordChange,
    biography,
    handleBiographyChange,
    birthDate,
    handleBirthDateChange,
    errorMessage,
  };
}
