function getNth(date) {
  if (date > 3 && date < 21) return 'th';
  switch (date % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

export function getFullDateString(date) {
  const dateDay = new Intl.DateTimeFormat('en-GB', { weekday: 'long' }).format(
    new Date(date)
  );
  const dateDate = new Date(date).getDate();
  const dateNth = getNth(dateDate);
  const dateMonth = new Intl.DateTimeFormat('en-GB', { month: 'long' }).format(
    new Date(date)
  );
  const dateYear = new Date(date).getFullYear();
  const dateString = `${dateDay} ${dateDate}${dateNth} ${dateMonth} ${dateYear}`;

  return dateString;
}
