import { gerateDaysFrom } from '@/utils/generateRangedNumber';
import { useRef } from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const NUMBER_OF_FUTHER_DAYS = 30;

export default function AvialableDays() {
  const currentDate = new Date();

  const timeSlotRef = useRef<null | HTMLDivElement>(null);

  const days = gerateDaysFrom(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDay() - 1,
    NUMBER_OF_FUTHER_DAYS,
  );

  function moveTimeSlotBy(distant: number) {
    if (timeSlotRef.current) timeSlotRef.current.scrollLeft += distant;
  }

  return (
    <div className="rounded-box">
      <h4 className="sub-header text-lg flex justify-between items-center gap-3 text-secondary font-medium mb-2">
        Select a date & time slot
        <input type="date" className="" />
      </h4>
      <div className="flex justify-between gap-2">
        <IoIosArrowBack
          size={25}
          onClick={() => moveTimeSlotBy(-20)}
          className="text-primary cursor-pointer"
        />
        <div className="overflow-x-auto flex gap-2 w-[80vw] sm:w-[40vw]">
          {days.map((day, index: number) => {
            const namedDay = new Date(day).toLocaleDateString('en-us', {
              weekday: 'short',
              day: 'numeric',
              month: 'short',
            });

            return (
              <div
                key={index}
                ref={timeSlotRef}
                className="time-slot text-nowrap px-2 py-1 bg-third rounded-md text-primary cursor-pointer"
              >
                {day.toDateString() == new Date().toDateString()
                  ? 'ToDay'
                  : namedDay}
              </div>
            );
          })}
        </div>
        <IoIosArrowBack
          size={25}
          onClick={() => moveTimeSlotBy(20)}
          className="rotate-180 text-primary cursor-pointer"
        />
      </div>
    </div>
  );
}
