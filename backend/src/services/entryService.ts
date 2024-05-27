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

export const entryService = {
  insertEntry,
};
