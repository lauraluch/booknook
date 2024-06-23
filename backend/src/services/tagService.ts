import { dbQuery } from "../repository/dbConnection";
import { Tag } from "../models/tagModel";

const insertTag = async (tag: Tag) => {
  await dbQuery("INSERT INTO booktag (title, color, user_id) VALUES(?, ?, ?)", [
    tag.title,
    tag.color,
    tag.user_id,
  ]);

  const actionReturn = await dbQuery(
    "SELECT seq AS Id FROM sqlite_sequence WHERE name = 'booktag'"
  );

  if (Array.isArray(actionReturn) && actionReturn.length > 0) {
    return actionReturn[0].Id as number;
  }

  return undefined;
};

const deleteTag = async (tagId: number) => {
  const deleteParams: any[] = [tagId];
  const deleteQuery = "DELETE FROM booktag WHERE id = ?";

  await dbQuery(deleteQuery, deleteParams);
};

const readTagById = async (tagId: number): Promise<Tag | undefined> => {
  const query = "SELECT * FROM booktag WHERE id = ?";
  const result = await dbQuery(query, [tagId]);

  if (Array.isArray(result) && result.length > 0) {
    return result[0] as Tag;
  }

  return undefined;
};

const readAllTagsFromUser = async (
  userId: number
): Promise<Tag[] | undefined> => {
  const query = "SELECT * FROM booktag WHERE user_id = ?";
  const result = await dbQuery(query, [userId]);

  if (Array.isArray(result) && result.length > 0) {
    return result as Tag[];
  }

  return [];
};

export const tagService = {
  insertTag,
  deleteTag,
  readTagById,
  readAllTags: readAllTagsFromUser,
};
