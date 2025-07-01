import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { workingTimeProps } from '../types/profile';

export default function WorkingTime({
  dayHours,
  workingHours,
}: workingTimeProps) {
  return (
    <AnimateUpEffect className="rounded-box space-y-2 flex-3 h-fit">
      <h1 className="text-xl font-medium">Working Time</h1>
      <div>
        <h5 className="text-secondary font-medium mb-1">Day hours</h5>
        <div className="flex gap-2">
          {dayHours.map((day: string) => {
            return (
              <span
                className="px-4 py-0.5 h-fit font-medium bg-primary rounded-sm text-white"
                key={day}
              >
                {day}
              </span>
            );
          })}
        </div>
      </div>
      <div>
        <h5 className="text-secondary font-medium mb-1">Working hous</h5>
        <div className="flex gap-2">
          {workingHours.map((hour: string) => {
            return (
              <span
                className="px-4 py-0.5 h-fit font-medium bg-primary rounded-sm text-white"
                key={hour}
              >
                {hour}
              </span>
            );
          })}
        </div>
      </div>
    </AnimateUpEffect>
  );
}
