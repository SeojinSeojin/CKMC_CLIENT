export const parseDate = (timeString: string) => {
  const date = new Date(Date.parse(timeString));
  return dateTemplate(date);
};

export const dateTemplate = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
