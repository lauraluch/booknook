import { useState } from "react";
import { makeCreateBookForm } from "./utils";
import { IBook } from "src/types/book/IBook";
import { IBackBook } from "src/types/book/IBackBook";
import { useAuthContext } from "@contexts/useAuthContext";
import { postBook } from "@services/api/book/postBook";
import { useGetBooks } from "@services/api/book/getBooks/hook";
import { useRouter } from "next/router";

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
  const { user } = useAuthContext();

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
      mutate();
    } catch (error) {
      console.log("[handleCreateBook]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  function handleEditClick() {
    setSheetStatus(SheetStatus.EDITING);
  }

  function handleBookClick(book: IBook) {
    console.log(book);
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
    setIsOpen(true);
    setSheetStatus(SheetStatus.READING);
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

    loading,
    handleBookClick,
  };
}
