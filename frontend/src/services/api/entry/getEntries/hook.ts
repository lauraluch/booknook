import useSWR from "swr";
import { getEntries } from ".";

export function useGetEntries(bookId: number) {
  const { data, isValidating, error, mutate } = useSWR(
    `/entries/book/${bookId}`,
    () => getEntries(bookId),
    { revalidateOnFocus: false }
  );

  return { data, isValidating, error, mutate };
}
