import React, {
  createContext,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type CalenderType = {
  year: number;
  month: number;
  day: Date;
  setYear: React.Dispatch<SetStateAction<number>>;
  setMonth: React.Dispatch<SetStateAction<number>>;
  setDay: (date: Date) => void;
  getFullDate: () => Date;
  increasMonthBy: () => void;
  decreaseMonthBy: () => void;
};

const CalenderContext = createContext<CalenderType>({} as CalenderType);

function CalenderProvider({
  children,
  setParentDay,
}: {
  children: React.ReactNode;
  setParentDay?: React.Dispatch<React.SetStateAction<Date>>;
}) {
  const currentDate = new Date();
  const minYear = currentDate.getFullYear();
  const maxYear = currentDate.getFullYear() + 5;
  const [year, setYear] = useState<number>(currentDate.getFullYear());
  const [month, setMonth] = useState<number>(currentDate.getMonth() + 1);
  const [day, setCurrentDay] = useState<Date>(
    new Date(year, month - 1, currentDate.getDate()),
  );

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

  function setDay(date: Date) {
    setCurrentDay(date);
    setParentDay?.(date);
  }

  useEffect(() => {
    if (year && month)
      setCurrentDay(new Date(year, month - 1, currentDate.getDate()));
  }, [year, month]);

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
