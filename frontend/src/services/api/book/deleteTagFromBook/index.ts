import API from "@services/api";

export async function deleteTagFromBook(
  bookId: number,
  tagId: number
): Promise<void> {
  const response = await API.delete(`/books/${bookId}/tags/${tagId}`);
  return response.data;
}
