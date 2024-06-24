import { useEffect, useState } from "react";
import { SheetStatus } from "../useBooks";
import { useAuthContext } from "@contexts/useAuthContext";
import { makeCreateUserForm } from "./utils";
import { IUser } from "src/types/user/IUser";
import { useGetUser } from "@services/api/user/getUser/hook";
import { mapUserFromBackend } from "src/types/user/utils";
import { areFormsEqual, returnAlteredData } from "../useBooks/utils";
import { HttpPutUserPayload } from "@services/api/user/putUser/types";
import { putUser } from "@services/api/user/putUser";

export function useUserDetails() {
  const { user } = useAuthContext();
  const { data, mutate } = useGetUser(user.userId);

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sheetStatus, setSheetStatus] = useState<SheetStatus>(
    SheetStatus.READING
  );
  const [form, setForm] = useState(
    mapUserFromBackend(data) || makeCreateUserForm
  );
  const [backupForm, setBackupForm] = useState(
    mapUserFromBackend(data) || makeCreateUserForm
  );

  function handleFormChange(key: keyof IUser, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleOutsideClick() {
    setIsOpen(false);
    setSheetStatus(SheetStatus.READING);
  }

  function handleEditClick() {
    setSheetStatus(SheetStatus.EDITING);
  }

  async function handleEditConfirm() {
    setLoading(true);

    try {
      if (areFormsEqual(backupForm, form)) return;
      const editedUser: HttpPutUserPayload = {
        username: returnAlteredData(backupForm.username, form.username),
        biography: returnAlteredData(backupForm.biography, form.biography),
        birth_date: returnAlteredData(backupForm.birthDate, form.birthDate),
      };

      await putUser(form.id, editedUser);
      await mutate();
      setIsOpen(false);
      setSheetStatus(SheetStatus.READING);
    } catch (error) {
      console.log("[handleEditConfirm]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    setForm(mapUserFromBackend(data));
  }, [data]);

  return {
    userForm: form,
    handleUserFormChange: handleFormChange,
    userSheetStatus: sheetStatus,
    userSheetIsOpen: isOpen,
    handleOpenUserSheet: handleOpen,
    handleOutsideClickUserSheet: handleOutsideClick,
    handleEditUserClick: handleEditClick,
    handleEditUserConfirm: handleEditConfirm,
  };
}
