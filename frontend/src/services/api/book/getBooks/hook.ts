import useSWR from "swr";
import { getBooks } from ".";

export function useGetBooks(userId: number) {
  const { data, isValidating, error, mutate } = useSWR(
    `/users/${userId}/books`,
    () => getBooks(userId),
    { revalidateOnFocus: false }
  );

  return { data, isValidating, error, mutate };
}
