import { useRef, useState } from "react";
import { areFormsEqual, makeCreateBookForm, returnAlteredData } from "./utils";
import { IBook } from "src/types/book/IBook";
import { IBackBook } from "src/types/book/IBackBook";
import { useAuthContext } from "@contexts/useAuthContext";
import { postBook } from "@services/api/book/postBook";
import { useGetBooks } from "@services/api/book/getBooks/hook";
import { useRouter } from "next/router";
import { HttpPutBookPayload } from "@services/api/book/putBook/types";
import { putBook } from "@services/api/book/putBook";
import { deleteBook } from "@services/api/book/deleteBook";
import { ActionModalMethods } from "src/components/modals/ActionModal/types";
import { useGetTagsInBooks } from "@services/api/book/getTagsInBook/hook";

export enum SheetStatus {
  READING = 0,
  CREATING = 1,
  EDITING = 3,
}

export function useBooks() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sheetStatus, setSheetStatus] = useState<SheetStatus>(
    SheetStatus.CREATING
  );
  const [form, setForm] = useState(makeCreateBookForm);
  const [backupForm, setBackupForm] = useState(makeCreateBookForm);
  const { user } = useAuthContext();

  // Refs
  const modalRef = useRef<ActionModalMethods>(null);

  // Hooks
  const { data: books, isValidating, mutate } = useGetBooks(user.userId);
  const { push } = useRouter();

  function handleFormChange(key: keyof IBook, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleCreateClick() {
    setForm(makeCreateBookForm);
    setIsOpen(true);
    setSheetStatus(SheetStatus.CREATING);
  }

  function handleNoteClick(bookId: number) {
    push(`/book/${bookId}/notes`);
  }

  function handleOutsideClick() {
    setIsOpen(false);
    setSheetStatus(SheetStatus.READING);
  }

  async function handleCreateBook() {
    setLoading(true);
    try {
      const book: IBackBook = {
        title: form.title,
        author: form.author,
        readAt: form.readAt,
        finished: form.finished ? 1 : 0,
        favorite: form.favorite ? 1 : 0,
        user_id: user.userId,
        rating: form.rating || 0,
        color: form.color || "#ffffff",
      };

      await postBook(book);
      setForm(makeCreateBookForm);
      setIsOpen(false);
      setSheetStatus(SheetStatus.READING);
      await mutate();
    } catch (error) {
      console.log("[handleCreateBook]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  function handleEditClick() {
    setSheetStatus(SheetStatus.EDITING);
  }

  async function handleEditConfirm() {
    setLoading(true);

    try {
      if (areFormsEqual(backupForm, form)) return;

      const editedBook: HttpPutBookPayload = {
        title: returnAlteredData(backupForm.title, form.title),
        author: returnAlteredData(backupForm.author, form.author),
        readAt: returnAlteredData(backupForm.readAt, form.readAt),
        finished: returnAlteredData(backupForm.finished, form.finished) ? 1 : 0,
        favorite: returnAlteredData(backupForm.favorite, form.favorite) ? 1 : 0,
        rating: returnAlteredData(backupForm.rating, form.rating),
        color: returnAlteredData(backupForm.color, form.color),
      };

      console.log(editedBook);

      await putBook(form.id, editedBook);
      setForm(makeCreateBookForm);
      setIsOpen(false);
      setSheetStatus(SheetStatus.READING);
      await mutate();
    } catch (error) {
      console.log("[handleEditConfirm]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  function handleBookClick(book: IBook) {
    setForm({
      id: book.id,
      title: book.title,
      author: book.author,
      readAt: book.readAt,
      finished: book.finished,
      favorite: book.favorite,
      rating: book.rating,
      color: book.color,
    });

    setBackupForm({
      id: book.id,
      title: book.title,
      author: book.author,
      readAt: book.readAt,
      finished: book.finished,
      favorite: book.favorite,
      rating: book.rating,
      color: book.color,
    });

    setIsOpen(true);
    setSheetStatus(SheetStatus.READING);
  }

  function checkIfButtonIsDisabled() {
    if (sheetStatus === SheetStatus.CREATING) {
      if (form.title.length === 0 || form.author.length === 0) return true;
      return false;
    } else if (sheetStatus === SheetStatus.EDITING) {
      if (areFormsEqual(backupForm, form)) return true;
      return false;
    }
    return false;
  }

  async function handleDeleteBook() {
    try {
      await deleteBook(form.id);
      modalRef.current.close();
      setIsOpen(false);
      await mutate();
    } catch (error) {
      console.log("[handleDeleteBook]: ", error.response);
      modalRef.current.close();
    }
  }

  return {
    books,
    isLoadingBooks: !books && isValidating,
    handleCreateClick,
    handleOutsideClick,
    isOpen,
    sheetStatus,
    form,
    handleFormChange,
    handleCreateBook,
    handleEditClick,
    handleEditConfirm,
    handleDeleteBook,
    checkIfButtonIsDisabled,
    loading,
    handleBookClick,
    modalRef,
    handleNoteClick,
  };
}
