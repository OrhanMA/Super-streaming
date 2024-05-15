export function formatDuration(minutesStr: string) {
  const minutes = parseInt(minutesStr, 10);
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h${remainingMinutes}m`;
}
