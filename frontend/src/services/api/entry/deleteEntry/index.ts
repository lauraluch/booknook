import API from "@services/api";

export async function deleteEntry(entryId: number): Promise<void> {
  const response = await API.delete(`/entries/${entryId}`);
  return response.data;
}
