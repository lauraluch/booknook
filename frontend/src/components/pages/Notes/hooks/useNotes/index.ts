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
import {
  areFormsEqual,
  returnAlteredData,
} from "@pages/Books/hooks/useBooks/utils";
import { HttpPutEntryPayload } from "@services/api/entry/putEntry/types";
import { putEntry } from "@services/api/entry/putEntry";
import { deleteEntry } from "@services/api/entry/deleteEntry";

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

  // Functions
  function handleFormChange(key: keyof IEntry, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleOutsideClick() {
    setIsOpen(false);
    setSheetStatus(SheetStatus.READING);
  }

  function handleCreateClick() {
    setForm(makeCreateEntryForm);
    setIsOpen(true);
    setSheetStatus(SheetStatus.CREATING);
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
      await mutate();
    } catch (error) {
      console.log("[handleCreateNote]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  function checkIfButtonIsDisabled() {
    if (sheetStatus === SheetStatus.CREATING) {
      if (form.title.length === 0) return true;
      return false;
    } else if (sheetStatus === SheetStatus.EDITING) {
      if (areFormsEqual(backupForm, form)) return true;
      return false;
    }
    return false;
  }

  function handleNoteClick(note: IEntry) {
    setForm({
      id: note.id,
      bookId: note.bookId,
      title: note.title,
      description: note.description,
      lastModifiedAt: note.lastModifiedAt,
    });

    setBackupForm({
      id: note.id,
      bookId: note.bookId,
      title: note.title,
      description: note.description,
      lastModifiedAt: note.lastModifiedAt,
    });

    setIsOpen(true);
    setSheetStatus(SheetStatus.READING);
  }

  function handleEditClick() {
    setSheetStatus(SheetStatus.EDITING);
  }

  async function handleEditConfirm() {
    setLoading(true);

    try {
      if (areFormsEqual(backupForm, form)) return;

      const editedEntry: HttpPutEntryPayload = {
        title: returnAlteredData(backupForm.title, form.title),
        description: returnAlteredData(
          backupForm.description,
          form.description
        ),
        last_modified_at: format(Date.now(), "yyyy-MM-dd"),
      };

      await putEntry(form.id, editedEntry);
      setForm(makeCreateEntryForm);
      setIsOpen(false);
      setSheetStatus(SheetStatus.READING);
      await mutate();
    } catch (error) {
      console.log("[handleEditConfirm]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteNote() {
    try {
      await deleteEntry(form.id);
      modalRef.current.close();
      setIsOpen(false);
      await mutate();
    } catch (error) {
      console.log("[handleDeleteNote]: ", error.response);
      modalRef.current.close();
    }
  }

  return {
    notes,
    isOpen,
    loading,
    sheetStatus,
    isLoadingBooks: !notes && isValidating,
    noteForm: form,
    modalRef,
    handleFormChange,
    handleCreateNote,
    handleOutsideClick,
    checkIfButtonIsDisabled,
    handleCreateClick,
    handleNoteClick,
    handleEditClick,
    handleEditConfirm,
    handleDeleteNote,
  };
}
