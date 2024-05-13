import { dbQuery } from "../../services/db";
import { Tag } from "./types";

export const insertTag = async (tag: Tag) => {
  await dbQuery("INSERT INTO booktag (title, color) VALUES(?, ?)", [
    tag.title,
    tag.color,
  ]);

  const actionReturn = await dbQuery(
    "SELECT seq AS Id FROM sqlite_sequence WHERE name = 'booktag'"
  );

  if (Array.isArray(actionReturn) && actionReturn.length > 0) {
    return actionReturn[0].Id as number;
  }

  return undefined;
};

export const tagModel = {
  insertTag,
};
