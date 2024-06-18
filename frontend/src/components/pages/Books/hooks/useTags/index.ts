import { useAuthContext } from "@contexts/useAuthContext";
import { useGetTags } from "@services/api/tags/getTags/hook";
import { useState } from "react";

export function useTags() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  const { data, mutate } = useGetTags(user.userId);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return {
    isOpen,
    handleOpen,
    handleClose,
    tags: data,
  };
}
