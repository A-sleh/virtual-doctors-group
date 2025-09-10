import { IGetConsultaionsResponse } from '@/features/Consultation/api/get-consultaion';
import { AnyZodObject } from 'zod';



type WorkTimes = {
  id: number;
  startWorkHours: string;
  endWorkHours: string;
  day: string;
};

type WorkTime = Omit<WorkTimes,'day'>

const mapedDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat'];
const fullNamedDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];


const workTimeObj = new Map<string, WorkTime[]>();

function addWorkTime(key: string, newEntry: WorkTime) {
  const existing = workTimeObj.get(key) || [];
  workTimeObj.set(key, [...existing, newEntry]);
}

export function mappingWorkTimes(workTimes: WorkTimes[]) {
  workTimeObj.clear() // To avoid the conflect between clinics
  return new Promise(async (resolve) => {
    await workTimes?.map((wrokTime) => {
     addWorkTime(wrokTime.day,(removeKeys(wrokTime, ['day'])));
   });
   
   resolve(workTimeObj)
  })
}


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

function getDateFromDayAndTime(day: string, time: string) {
  const date = new Date(`${day} ${time.split(' ').join('')}`);
  return `${date.getFullYear()}-${(date.getMonth()+1 < 10 )&& '0'}${date.getMonth()+1}-${date.getDate()}T${time}:00`
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

function removeKeys<T>(obj: { [key: string]: any }, keysToRemove: string[]): T {
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

function getTimeFromDate(date: Date, withSpace: boolean = true): string {
  const hoursDigit =
    date.getHours() == 0
      ? 1
      : Math.floor(Math.log10(Number(date.getHours()))) + 1;
  const minutsDigit =
    date.getMinutes() == 0
      ? 1
      : Math.floor(Math.log10(Number(date.getMinutes()))) + 1;
  const time = `${
    hoursDigit == 1 ? '0' + date.getHours() : date.getHours()
  } : ${minutsDigit == 1 ? '0' + date.getMinutes() : date.getMinutes()}`;
  return withSpace ? time : time.split(' ').join('');
}

function secondsToDhms(totalSeconds: number) {
  const days = Number(Math.floor(totalSeconds / (3600 * 24)));
  totalSeconds %= 3600 * 24; // Remaining seconds after extracting days
  const hours = Number(Math.floor(totalSeconds / 3600));
  totalSeconds %= 3600; // Remaining seconds after extracting hours
  const minutes = Number(Math.floor(totalSeconds / 60));
  const seconds = totalSeconds % 60; // Remaining seconds

  return { days, hours, minutes, seconds };
}

function calcTheNumbersOfConsultaions(
  consultaions: IGetConsultaionsResponse[],
): { opened: number; closed: number; pending: number; Rejected: number } {
  const obj = new Map<string, number>([
    ['Closed', 0],
    ['Open', 0],
    ['Pending', 0],
    ['Rejected', 0],
  ]);

  consultaions.forEach((consultaion) =>
    obj.set(
      consultaion?.status || 'null',
      (obj.get(consultaion.status || 'null') || 0) + 1,
    ),
  );
  return {
    opened: obj.get('Open') || 0,
    closed: obj.get('Closed') || 0,
    pending: obj.get('Pending') || 0,
    Rejected: obj.get('Rejected') || 0,
  };
}

function getFullYearAsString(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

const convertPhotoToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      } else {
        reject(new Error('Failed to convert file to Base64.'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Error reading the file.'));
    };

    reader.readAsDataURL(file);
  });
};

export {
  removeKeys,
  generateRangedNumber,
  generateDaysFrom,
  calcTheNumberOfDaysFromCurrentDateTo,
  formIsNotValid,
  formatDateDayMonthDay,
  formatDateMonthYearDay,
  mapedDays,
  getTimeFromDate,
  secondsToDhms,
  calcTheNumbersOfConsultaions,
  getFullYearAsString,
  fullNamedDays,
  getDateFromDayAndTime,
  convertPhotoToBase64
};
