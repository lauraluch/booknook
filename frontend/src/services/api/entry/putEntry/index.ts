import API from "@services/api";
import { HttpPutEntryPayload } from "./types";

export async function putEntry(
  entryId: number,
  payload: HttpPutEntryPayload
): Promise<void> {
  const response = await API.put(`/entries/${entryId}`, payload);
  return response.data;
}
