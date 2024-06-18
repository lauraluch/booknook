import useSWR from "swr";
import { getTags } from ".";

export function useGetTagsInBooks(bookId: number) {
  const { data, isValidating, error, mutate } = useSWR(
    `/books/${bookId}/tags`,
    () => {
      if (!bookId) return [];
      return getTags(bookId);
    },
    { revalidateOnFocus: false }
  );

  return { data, isValidating, error, mutate };
}
