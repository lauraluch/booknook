import { useState } from "react";
import { makeCreateBookForm } from "./utils";
import { IBook } from "src/types/book/IBook";
import { IBackBook } from "src/types/book/IBackBook";
import { useAuthContext } from "@contexts/useAuthContext";
import { postBook } from "@services/api/book/postBook";
import { useGetBooks } from "@services/api/book/getBooks/hook";

export function useBooks() {
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(makeCreateBookForm);
  const { user } = useAuthContext();

  // Hooks
  const { data: books, isValidating, mutate } = useGetBooks(user.userId);

  function handleFormChange(key: keyof IBook, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleCreateClick() {
    setIsCreating(true);
  }

  function handleOutsideClick() {
    setIsCreating(false);
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
      setIsCreating(false);
      mutate();
    } catch (error) {
      console.log("[handleCreateBook]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  return {
    books,
    isLoadingBooks: !books && isValidating,
    handleCreateClick,
    handleOutsideClick,
    isCreating,
    form,
    handleFormChange,
    handleCreateBook,
    loading,
  };
}
