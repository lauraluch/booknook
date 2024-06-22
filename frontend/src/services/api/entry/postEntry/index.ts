import API from "@services/api";
import { HttpPostEntryPayload, HttpPostEntryResponse } from "./types";

export async function postEntry(
  payload: HttpPostEntryPayload
): Promise<HttpPostEntryResponse> {
  const response = await API.post("/entries", payload);
  return response.data;
}
