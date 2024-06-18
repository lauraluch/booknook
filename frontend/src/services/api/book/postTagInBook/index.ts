import API from "@services/api";

export async function postTagInBook(
  bookId: number,
  tagId: number
): Promise<void> {
  const response = await API.post(`/books/${bookId}/tags/${tagId}`);
  return response.data;
}
