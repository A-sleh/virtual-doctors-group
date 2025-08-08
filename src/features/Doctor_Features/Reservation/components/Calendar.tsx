import { useCalender } from '@/context/reservation/Calender';
import AnimateParentScaleUp, {
  AnimateChildScaleUpChild,
} from '@/lib/Animation/AnimateParentScaleUpChild';
import { cn } from '@/lib/utils';
import { mapedDays } from '@/utils';

function getCardStatusColor(percentage: number) {
  if (percentage < 33) return 'fourth';
  if (percentage < 66) return 'fivth';
  return 'danger';
}

export default function Calendar() {
  const { getDays, setDay, day } = useCalender();

  return (
    <AnimateParentScaleUp className="flex flex-wrap sm:grid sm:grid-cols-7 gap-1">
      {getDays().map((date, index: number) => (
        <AnimateChildScaleUpChild
          onClick={() => setDay(date)}
          key={index}
          duration={index / 2}
          className={cn(
            `flex  flex-col cursor-pointer bg-white sm:w-full rounded-md overflow-hidden text-white border border-${getCardStatusColor(
              (index * 10) % 101,
            )}`,
            day?.toDateString() == date.toDateString() && 'border-primary',
          )}
        >
          <h3
            className={cn(
              `flex justify-between items-center text-md px-1 py-0.5 font-medium bg-danger gap-1 bg-${getCardStatusColor(
                (index * 10) % 101,
              )}`,
              day?.toDateString() == date.toDateString() && 'bg-primary',
            )}
          >
            {index < 7 ? mapedDays[date.getDay()] : <i></i>}
            <span className="text-end">{date.getDate()}</span>
          </h3>
          <h1
            className={cn(
              `rounded-md hidden m-1.5 lg:m-3 text-[1.4em] font-medium sm:flex items-center justify-center px-3 py-5 lg:p-5 lg:py-10 bg-${getCardStatusColor(
                (index * 10) % 101,
              )}`,
              day?.toDateString() == date.toDateString() && 'bg-primary',
            )}
          >
            {(index * 10) % 101}%
          </h1>
        </AnimateChildScaleUpChild>
      ))}
    </AnimateParentScaleUp>
  );
}
