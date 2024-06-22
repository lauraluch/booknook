import { SheetStatus } from "@pages/Books/hooks/useBooks";
import { useRef, useState } from "react";
import { makeCreateEntryForm } from "./utils";
import { ActionModalMethods } from "src/components/modals/ActionModal/types";
import { useGetEntries } from "@services/api/entry/getEntries/hook";
import { useRouter } from "next/router";
import { IEntry } from "src/types/entry/IEntry";
import { IBackEntry } from "src/types/entry/IBackEntry";
import { format } from "date-fns";
import { postEntry } from "@services/api/entry/postEntry";

export function useNotes() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sheetStatus, setSheetStatus] = useState<SheetStatus>(
    SheetStatus.CREATING
  );
  const [form, setForm] = useState(makeCreateEntryForm);
  const [backupForm, setBackupForm] = useState(makeCreateEntryForm);

  // Refs
  const modalRef = useRef<ActionModalMethods>(null);

  // Hooks
  const { query } = useRouter();
  const { data: notes, isValidating, mutate } = useGetEntries(query.id as any);

  //   console.log(notes);

  // Functions
  function handleFormChange(key: keyof IEntry, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleCreateNote() {
    setLoading(true);
    try {
      const entry: IBackEntry = {
        title: form.title,
        description: form.description,
        book_id: query.id as any,
        last_modified_at: format(Date.now(), "yyyy-MM-dd"),
      };

      await postEntry(entry);
      setForm(makeCreateEntryForm);
      setIsOpen(false);
      setSheetStatus(SheetStatus.READING);
      mutate();
    } catch (error) {
      console.log("[handleCreateNote]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  return {
    notes,
    isLoadingBooks: !notes && isValidating,
    noteForm: form,
    handleFormChange,
    handleCreateNote,
  };
}
