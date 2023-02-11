export const dateFormatter = (date: string | undefined) => {
  if (date !== undefined) {
    const newDate = new Date(date);
    const dayOfMonth = formatter(newDate.getDate());
    const month = formatter(newDate.getMonth() + 1);
    const year = newDate.getFullYear();

    return `${dayOfMonth}.${month}.${year}`;
  }
};

function formatter(givenNumber: number) {
  return givenNumber >= 10 ? givenNumber : `0${givenNumber}`;
}
