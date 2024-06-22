import { Entry } from "../models/entryModel";
import { dbQuery } from "../repository/dbConnection";

export const insertEntry = async (entry: Entry) => {
  await dbQuery(
    "INSERT INTO bookentry (entry_id, book_id, title, description, last_modified_at) VALUES(?, ?, ?, ?, ?)",
    [
      entry.entry_id,
      entry.book_id,
      entry.title,
      entry.description,
      entry.last_modified_at,
    ]
  );

  const actionReturn = await dbQuery(
    "SELECT seq AS Id FROM sqlite_sequence WHERE name = 'bookentry'"
  );

  if (Array.isArray(actionReturn) && actionReturn.length > 0) {
    return actionReturn[0].Id as number;
  }

  return undefined;
};

export const readEntryById = async (
  entryId: number
): Promise<Entry | undefined> => {
  const query = "SELECT * FROM bookentry WHERE entry_id = ?";
  const result = await dbQuery(query, [entryId]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0] as Entry;
  }

  return undefined;
};

const readEntriesFromBook = async (bookId: number): Promise<Entry[]> => {
  console.log(bookId);

  const query = "SELECT * FROM bookentry WHERE book_id = ?";
  const result = await dbQuery(query, [bookId]);

  return result as Entry[];
};

export const updateEntry = async (entryId: number, updates: Partial<Entry>) => {
  const { title, description, last_modified_at } = updates;

  const updateParams: any[] = [];
  let updateQuery = "UPDATE bookentry SET";

  if (title !== undefined) {
    updateQuery += " title = ?,";
    updateParams.push(title);
  }

  if (description !== undefined) {
    updateQuery += " description = ?,";
    updateParams.push(description);
  }

  if (last_modified_at !== undefined) {
    updateQuery += " last_modified_at = ?,";
    updateParams.push(last_modified_at);
  }

  updateQuery = updateQuery.slice(0, -1);

  updateQuery += " WHERE id = ?";
  updateParams.push(entryId);

  await dbQuery(updateQuery, updateParams);
};

const deleteEntry = async (entryId: number) => {
  const deleteParams: any[] = [entryId];
  const deleteQuery = "DELETE FROM bookentry WHERE entry_id = ?";

  await dbQuery(deleteQuery, deleteParams);
};

export const entryService = {
  insertEntry,
  updateEntry,
  readEntryById,
  readEntriesFromBook,
  deleteEntry,
};
