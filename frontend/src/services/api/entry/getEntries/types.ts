export type HttpGetEntriesEntry = {
  entry_id: number;
  book_id: number;
  title: string;
  description: string;
  last_modified_at: string;
};

export type HttpGetEntriesResponse = HttpGetEntriesEntry[];
