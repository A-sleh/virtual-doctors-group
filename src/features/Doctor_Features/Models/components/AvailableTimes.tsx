import AnimateParentScaleUp, {
  AnimateChildScaleUpChild,
} from '@/lib/Animation/AnimateParentScaleUpChild';
import { times } from '../api/data';
import { usePickTimeSlot } from '@/context/reservation/PickTimeSlotProvieder';
import { cn } from '@/lib/utils';

export default function AvailableTimes() {
  const { setSelectedTime, selectedTime } = usePickTimeSlot();
  return (
    <AnimateParentScaleUp className="flex gap-2 flex-wrap justify-center">
      {times.map((time, index: number) => {
        return (
          <AnimateChildScaleUpChild
            key={time.time}
            onClick={() => setSelectedTime(time.time)}
            duration={index / 5}
            className={cn(
              `px-4 py-2 rounded-lg text-nowrap bg-primary-hover cursor-pointer text-white transition-all`,
              time.status == 'close' &&
                ' bg-[#157ae557] pointer-events-none cursor-not-allowed ',
              selectedTime == time.time && 'bg-primary',
            )}
          >
            {time.time}
          </AnimateChildScaleUpChild>
        );
      })}
    </AnimateParentScaleUp>
  );
}
