import { useState } from "react";
import { makeCreateBookForm } from "./utils";
import { IBook } from "src/types/book/IBook";
import { IBackBook } from "src/types/book/IBackBook";
import { useAuthContext } from "@contexts/useAuthContext";
import { postBook } from "@services/api/book/postBook";

export function useBooks() {
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(makeCreateBookForm);
  const { user } = useAuthContext();

  const booksMock = [
    {
      id: 1,
      title: "Get Well Soon",
      author: "Breton",
      readAt: "2024-06-11",
      finished: false,
      favorite: true,
      rating: 4,
    },
    {
      id: 2,
      title: "Obstacles",
      author: "Syd Matters",
      readAt: "2024-06-11",
      finished: true,
      favorite: true,
    },
    {
      id: 3,
      title: "Something good tonight will make me forget about you",
      author: "Alt-J",
      readAt: "2024-06-11",
      finished: false,
      favorite: false,
    },
  ];

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

      console.log("book enviado: ", book);

      await postBook(book);
      setForm(makeCreateBookForm);
      setIsCreating(false);
    } catch (error) {
      console.log("[handleCreateBook]: ", error.response);
    } finally {
      setLoading(false);
    }
  }

  return {
    booksMock,
    handleCreateClick,
    handleOutsideClick,
    isCreating,
    form,
    handleFormChange,
    handleCreateBook,
    loading,
  };
}
