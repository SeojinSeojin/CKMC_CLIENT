export const getDateDifference = (dueDate: Date) => {
  const today = new Date();
  const difference = new Date(dueDate.getTime() - today.getTime());
  return difference.getTime();
};

export const dateDifferenceTemplate = (differenceTime: number) => {
  const difference = new Date(differenceTime);
  const dateDifference = `${difference.getUTCDate()}`.padStart(2, '0');
  const hourDifference = `${difference.getUTCHours()}`.padStart(2, '0');
  const minuteDifference = `${difference.getUTCMinutes()}`.padStart(2, '0');
  const secondDifference = `${difference.getUTCSeconds()}`.padStart(2, '0');
  return `${dateDifference}일 ${hourDifference}시간 ${minuteDifference}분 ${secondDifference}초`;
};
