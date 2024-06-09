import { useEffect, useState } from "react";

export function useSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [biography, setBiography] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //   const [birthDate, setBirthDate] = useState();

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

  function checkPasswordValidity() {
    if (password !== confirmPassword) {
      setErrorMessage("As senhas não condizem.");
      return;
    }
    setErrorMessage("");
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
    errorMessage,
  };
}
