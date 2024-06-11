import { postUser } from "@services/api/user/postUser";
import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { ActionModalMethods } from "src/components/modals/ActionModal/types";
import { IBackUser } from "src/types/user/IBackUser";

export function useSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [biography, setBiography] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Refs
  const modalRef = useRef<ActionModalMethods>(null);

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
    setLoading(true);
    try {
      const user: IBackUser = {
        username: username,
        password: password,
        biography: biography,
        creation_date: format(Date.now(), "yyyy-MM-dd"),
        birth_date: birthDate,
      };

      await postUser(user);

      modalRef.current.open();
    } catch (error) {
      console.log("[handleCreateUser]: ", error.response);
    } finally {
      setLoading(false);
    }
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
    handleCreateUser,
    loading,
    modalRef,
  };
}
