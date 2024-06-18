import useSWR from "swr";
import { getTags } from ".";

export function useGetTags(userId: number) {
  const { data, isValidating, error, mutate } = useSWR(
    `/users/${userId}/tags`,
    () => getTags(userId),
    { revalidateOnFocus: false }
  );

  return { data, isValidating, error, mutate };
}
