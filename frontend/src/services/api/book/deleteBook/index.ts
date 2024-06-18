import API from "@services/api";

export async function deleteBook(bookId: number): Promise<void> {
  const response = await API.delete(`/books/${bookId}`);
  return response.data;
}
