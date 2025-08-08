import React, {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type CalenderType = {
  year: number;
  month: number;
  day: Date | null;
  setDay: React.Dispatch<SetStateAction<Date | null>>;
  setYear: React.Dispatch<SetStateAction<number>>;
  setMonth: React.Dispatch<SetStateAction<number>>;
  getFullDate: () => Date;
  increasMonthBy: () => void;
  decreaseMonthBy: () => void;
  getDays: () => Date[];
};

const CalenderContext = createContext<CalenderType>({} as CalenderType);

function CalenderProvider({ children }: { children: React.ReactNode }) {
  const currentDate = new Date();
  const minYear = currentDate.getFullYear();
  const maxYear = currentDate.getFullYear() + 5;
  const [year, setYear] = useState<number>(currentDate.getFullYear());
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1);
  const [day, setDay] = useState<Date | null>(new Date(year, month, 1));

  function getFullDate(): Date {
    return new Date(`${year}-${month}`);
  }

  function increasMonthBy() {
    if (month == 12 && year == maxYear) return;
    if (month == 12 && year < maxYear) {
      setYear((year) => year + 1);
      setMonth(1);
      return;
    }

    setMonth((month) => month + 1);
  }

  function decreaseMonthBy() {
    if (month == 1 && year == minYear) return;
    if (month == 1 && year > minYear) {
      setYear((year) => year - 1);
      setMonth(12);
      return;
    }
    setMonth((month) => month - 1);
  }

  function getDays(): Date[] {
    const days: Date[] = Array<Date>();
    for (let i = 1; i < 32; ++i) {
      const date = new Date(year, month, i);

      if (date.getMonth() != new Date(year, month, i - 1).getMonth() && i > 1)
        break;
      days.push(date);
    }
    return days;
  }
  return (
    <CalenderContext.Provider
      value={{
        year,
        setYear,
        month,
        setMonth,
        getFullDate,
        increasMonthBy,
        decreaseMonthBy,
        getDays,
        day,
        setDay,
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
}

function useCalender() {
  const context = useContext(CalenderContext);
  if (context === undefined) {
    throw new Error(
      'CalenderContext was used outside of auth context provider',
    );
  }
  return context;
}

export { CalenderProvider, useCalender };
