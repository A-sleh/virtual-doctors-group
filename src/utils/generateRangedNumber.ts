export function generateRangedNumber(
  start: number,
  end: number,
  step: number = 1,
): number[] {
  const Numbers: number[] = new Array();
  for (let i: number = start; i <= end; i += step) {
    Numbers.push(i);
  }
  return Numbers;
}

export function gerateDaysFrom(
  year: number,
  month: number,
  day: number,
  totalDays: number,
): Date[] {
  let days: Date[] = [];

  for (let i = day; i < totalDays + day; ++i) days.push(new Date(year, month, i));

  return days;
}
