import { AnyZodObject } from 'zod';

const mapedDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat'];

function generateRangedNumber(
  start: number,
  end: number,
  step: number = 1,
): number[] {
  const Numbers: number[] = new Array<number>();
  for (let i: number = start; i <= end; i += step) {
    Numbers.push(i);
  }
  return Numbers;
}

function generateDaysFrom(
  year: number,
  month: number,
  day: number,
  totalDays: number,
): Date[] {
  const days: Date[] = new Array<Date>();

  for (let i = day; i < totalDays + day; ++i)
    days.push(new Date(year, month, i));

  return days;
}

function removeKeys<T>(
  obj: { [key: string]: string | Date },
  keysToRemove: string[],
): T {
  return Object.keys(obj)
    .filter((key) => !keysToRemove.includes(key))
    .reduce((newObj: { [key: string]: string | Date }, key) => {
      newObj[key] = obj[key];
      return newObj;
    }, {}) as T;
}

function calcTheNumberOfDaysFromCurrentDateTo(date: string): number {
  const currentDate = new Date().getTime();
  const reservationDate = new Date(date).getTime();
  const days: number = (reservationDate - currentDate) / (1000 * 60 * 60 * 24);

  return days;
}

function formIsNotValid(obj: AnyZodObject, data: object) {
  const parsingData = obj.safeParse(data);

  if (!parsingData.success) {
    return parsingData.error.flatten().fieldErrors;
  }
  return false;
}

function formatDateDayMonthDay(date: Date) {
  return new Date(date).toLocaleDateString('en-us', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

function formatDateMonthYearDay(date: Date) {
  return new Date(date).toLocaleDateString('en-us', {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
  });
}

export {
  removeKeys,
  generateRangedNumber,
  generateDaysFrom,
  calcTheNumberOfDaysFromCurrentDateTo,
  formIsNotValid,
  formatDateDayMonthDay,
  formatDateMonthYearDay,
  mapedDays,
};
