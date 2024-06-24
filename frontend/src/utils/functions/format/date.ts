export function formatDate(dateStr: string): string {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateStr)) {
    // throw new Error("Formato de data inválido. Use 'AAAA-MM-DD'.");
    return;
  }

  const [year, month, day] = dateStr.split("-");

  return `${day}/${month}/${year}`;
}
