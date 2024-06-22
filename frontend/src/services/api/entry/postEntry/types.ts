export interface HttpPostEntryPayload {
  book_id: number;
  title: string;
  description: string;
  last_modified_at: string;
}

export interface HttpPostEntryResponse {
  entryId: number;
}
