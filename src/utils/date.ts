/**
 * Gets the common date printing format
 */
export function printDate(d: Date): string {
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const hours = d.getHours();
  const minutes = d.getMinutes();
  const fullDate = date < 10 ? `0${date}` : date;
  const fullMonth = month < 10 ? `0${month}` : month;
  const fullHours = hours < 10 ? `0${hours}` : hours;
  const fullMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${fullDate}-${fullMonth}-${d.getFullYear()} ${fullHours}:${fullMinutes}`;
}
