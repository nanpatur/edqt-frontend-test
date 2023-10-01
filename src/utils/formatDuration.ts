export const formatDuration = (duration: {
  hours: number;
  minutes: number;
  seconds: number;
}): string => {
  const { hours, minutes, seconds } = duration;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
