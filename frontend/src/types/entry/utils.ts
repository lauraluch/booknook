import { HttpGetEntriesEntry } from "@services/api/entry/getEntries/types";
import { IEntry } from "./IEntry";

export function mapEntryFromBackend(entry: HttpGetEntriesEntry): IEntry {
  return {
    id: entry.entry_id,
    bookId: entry.book_id,
    title: entry.title,
    description: entry.description,
    lastModifiedAt: entry.last_modified_at,
  };
}
