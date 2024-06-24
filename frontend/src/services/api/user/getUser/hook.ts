import useSWR from "swr";
import { getUser } from ".";

export function useGetUser(userId: number) {
  const { data, isValidating, error, mutate } = useSWR(
    `/users/${userId}`,
    () => getUser(userId),
    { revalidateOnFocus: false }
  );

  return { data, isValidating, error, mutate };
}
