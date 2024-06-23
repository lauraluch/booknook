import { deleteTagFromBook } from "@services/api/book/deleteTagFromBook";
import { useGetTagsInBooks } from "@services/api/book/getTagsInBook/hook";
import { postTagInBook } from "@services/api/book/postTagInBook";
import { ITag } from "src/types/tag/ITag";

export function useTagsInBooks(bookId: number) {
  const { data: tagsInBook, mutate } = useGetTagsInBooks(bookId);

  async function handleAddTagToBook(tagId: number) {
    try {
      await postTagInBook(bookId, tagId);
      await mutate();
    } catch (error) {
      console.log("[handleAddTagToBook]", error);
    }
  }

  async function handleDeleteTagFromBook(tagId: number) {
    try {
      await deleteTagFromBook(bookId, tagId);
      await mutate();
    } catch (error) {
      console.log("[handleDeleteTagFromBook]", error);
    }
  }

  return {
    tagsInBook,
    handleAddTagToBook,
    handleDeleteTagFromBook,
  };
}
