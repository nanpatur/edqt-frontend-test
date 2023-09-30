export const formatDate = (schedule: string, locale: string = "id-ID") => {
  const parsedDate = new Date(schedule);

  const formattedDate = parsedDate.toLocaleString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = parsedDate.toLocaleString(locale, {
    hour: "numeric",
    minute: "numeric",
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
};
