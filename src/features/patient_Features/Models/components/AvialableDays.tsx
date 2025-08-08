import HasPermission from '@/context/auth/HasPermission';
import { usePickTimeSlot } from '@/context/reservation/PickTimeSlotProvieder';
import { cn } from '@/lib/utils';
import { withChildProps } from '@/types/api';
import { formatDateDayMonthDay, generateDaysFrom } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const NUMBER_OF_FUTHER_DAYS = 30;

export default function AvialableDays({ children }: withChildProps) {
  const { selectedDay, setSelectedDay } = usePickTimeSlot();
  const initDayRef = useRef<HTMLDivElement | null>(null);
  const [move, setMove] = useState(0);
  const currentDate = new Date();

  const days = generateDaysFrom(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDay() + 3,
    NUMBER_OF_FUTHER_DAYS,
  );

  useEffect(() => {
    if (initDayRef)
      setMove(
        initDayRef.current?.offsetLeft
          ? initDayRef.current?.offsetLeft * -1
          : 0,
      );
  }, [initDayRef]);

  return (
    <div className="rounded-box">
      <h4 className="sub-header text-lg flex justify-between items-center gap-3 text-secondary font-medium mb-2">
        Select a date & time slot
        <HasPermission allowedTo={['doctor', 'admin']}>
          <input
            type="date"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          />
        </HasPermission>
      </h4>
      <div className="flex justify-between gap-2">
        <IoIosArrowBack
          size={25}
          onClick={() => setMove((last) => last + 100)}
          className="text-primary cursor-pointer"
        />
        <div className="overflow-x-auto flex gap-2 w-[80vw] sm:w-[40vw] relative">
          <div
            style={{
              left: `${move}px`,
            }}
            className="flex gap-2 w-full absolute top-0 bottom-0 transition-all"
          >
            {days.map((day, index: number) => {
              const namedDay = formatDateDayMonthDay(day);
              return (
                <div
                  key={index}
                  ref={
                    selectedDay == day.toDateString() ? initDayRef : undefined
                  }
                  onClick={() => setSelectedDay(day.toDateString())}
                  className={cn(
                    'time-slot text-nowrap px-2 py-1 bg-third rounded-md text-primary cursor-pointer',
                    selectedDay == day.toDateString() &&
                      'bg-primary-hover text-white',
                  )}
                >
                  {day.toDateString() == currentDate.toDateString()
                    ? 'ToDay'
                    : namedDay}
                </div>
              );
            })}
          </div>
        </div>
        <IoIosArrowBack
          size={25}
          onClick={() => setMove((last) => last - 100)}
          className="rotate-180 text-primary cursor-pointer"
        />
      </div>
      {children}
    </div>
  );
}
