import { useAuthContext } from "@contexts/useAuthContext";
import { deleteTag } from "@services/api/tags/deleteTag";
import { useGetTags } from "@services/api/tags/getTags/hook";
import { useState } from "react";
import { SheetStatus } from "../useBooks";
import { makeCreateTagForm } from "./utils";
import { ITag } from "src/types/tag/ITag";
import { IBackTag } from "src/types/tag/IBackTag";
import { postTag } from "@services/api/tags/postTag";

export function useTags() {
  const [isOpen, setIsOpen] = useState(false);
  const [sheetStatus, setSheetStatus] = useState<SheetStatus>(
    SheetStatus.READING
  );
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();
  const { data, mutate } = useGetTags(user.userId);

  const [form, setForm] = useState(makeCreateTagForm);

  function handleFormChange(key: keyof ITag, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setForm(makeCreateTagForm);
    setIsOpen(false);
  }

  function handleChangeStatus(status: SheetStatus) {
    setSheetStatus(status);
  }

  async function handleCreateTag() {
    setLoading(true);
    try {
      const tag: IBackTag = {
        title: form.title,
        color: form.color || "#ffffff",
        user_id: user.userId,
      };

      await postTag(tag);
      setForm(makeCreateTagForm);
      setSheetStatus(SheetStatus.READING);
      await mutate();
    } catch (error) {
      console.log("[handleCreateTag]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteTag(tagId: number) {
    try {
      await deleteTag(tagId);
      await mutate();
    } catch (error) {
      console.log("[handleDeleteBook]: ", error.response);
    }
  }

  function handleCreateClick() {
    setForm(makeCreateTagForm);
    setSheetStatus(SheetStatus.CREATING);
  }

  function checkIfButtonIsDisabled() {
    if (form.title.length === 0) return true;
    return false;
  }

  return {
    isOpen,
    sheetStatus,
    handleOpen,
    handleClose,
    tags: data,
    handleDeleteTag,
    form,
    handleFormChange,
    handleCreateTag,
    handleCreateClick,
    handleChangeStatus,
    checkIfButtonIsDisabled,
  };
}
