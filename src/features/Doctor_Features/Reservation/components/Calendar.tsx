import { useCurrentClinic } from '@/context/doctor/CurrentClinicProvider';
import { useCalender } from '@/context/reservation/CalenderProvider';
import AnimateParentScaleUp, {
  AnimateChildScaleUpChild,
} from '@/lib/Animation/AnimateParentScaleUpChild';
import { cn } from '@/lib/utils';
import { mapedDays } from '@/utils';
import { useGetCalendarDays } from '../api/get-clinic-reservation';
import CalendarSkeleton from '@/components/skeleton/CalendarSkeleton';
import React from 'react';

function getCardStatusColor(percentage: number) {
  if (percentage < 33) return 'fourth';
  if (percentage < 66) return 'fivth';
  return 'danger';
}

function Calendar() {
  const { setDay, day: localDay, year, month } = useCalender();
  const { clinic } = useCurrentClinic();
  const { calendarDays, isLoading } = useGetCalendarDays(
    clinic.id,
    `${year}-${month}`,
  );
  return (
    <AnimateParentScaleUp className="flex flex-wrap sm:grid sm:grid-cols-7 gap-1 relative ">
      {clinic.id != undefined ? (
        isLoading ? (
          <CalendarSkeleton repeate={30} />
        ) : (
          calendarDays?.map(({ busynessPercent, day }, index: number) => {
            return (
              <AnimateChildScaleUpChild
                onClick={() => setDay(new Date(day))}
                key={index}
                duration={index / 2}
                className={cn(
                  `flex  flex-col cursor-pointer bg-white sm:w-full rounded-md overflow-hidden text-white border border-${getCardStatusColor(
                    busynessPercent,
                  )}`,
                  localDay?.toDateString() == new Date(day).toDateString() &&
                    'border-primary',
                )}
              >
                <h3
                  className={cn(
                    `flex justify-between items-center text-md px-1 py-0.5 font-medium bg-danger gap-1 bg-${getCardStatusColor(
                      busynessPercent,
                    )}`,
                    localDay?.toDateString() == new Date(day).toDateString() &&
                      'bg-primary',
                  )}
                >
                  {index < 7 ? mapedDays[new Date(day).getDay()] : <i></i>}
                  <span className="text-end">{new Date(day).getDate()}</span>
                </h3>
                <h1
                  className={cn(
                    `rounded-md hidden m-1.5 lg:m-3 text-[1.4em] font-medium sm:flex items-center justify-center px-3 py-5 lg:p-5 lg:py-10 bg-${getCardStatusColor(
                      busynessPercent,
                    )}`,
                    localDay?.toDateString() == new Date(day).toDateString() &&
                      'bg-primary',
                  )}
                >
                  {busynessPercent}%
                </h1>
              </AnimateChildScaleUpChild>
            );
          })
        )
      ) : (
        <h3 className="rounded-box w-full absolute p-3 text-xl text-center text-danger">
          Please select one of your clinics from the top, to show the calender
        </h3>
      )}
    </AnimateParentScaleUp>
  );
}

export default React.memo(Calendar);
