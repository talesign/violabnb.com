export function getId() {
  const random_number = new String(
    Math.floor(Math.random() * (999 - 101)) + 101
  );
  const current_date = new Date().toISOString();
  const id = current_date.concat("-", random_number.toString());
  return id;
}

export function formatDate(date_string: string): string {
  const date = new Date(date_string);
  const day = String(date.getDate()).padStart(2, "0"); // get the day and ensure it's two digits
  const month = String(date.getMonth() + 1).padStart(2, "0"); // get the month (0 indexed) and ensure it's two digits
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
