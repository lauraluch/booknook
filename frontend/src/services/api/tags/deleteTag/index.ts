import API from "@services/api";

export async function deleteTag(tagId: number): Promise<void> {
  const response = await API.delete(`/tags/${tagId}`);
  return response.data;
}
