export function checkCurrentUser(queryId: string, userId: number) {
  if (userId?.toString() === queryId) {
    return true;
  }
  return false;
}
