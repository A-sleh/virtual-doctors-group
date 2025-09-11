import AnimateParentScaleUp, {
  AnimateChildScaleUpChild,
} from '@/lib/Animation/AnimateParentScaleUpChild';
import { usePickTimeSlot } from '@/context/reservation/PickTimeSlotProvieder';
import { cn } from '@/lib/utils';
import { useGetReservation } from '../../Reservation/api/get-clinic-reservation';
import { getTimeFromDate } from '@/utils';
import { useAuth } from '@/context/auth/AuthProvider';
import TimesSkeleton from '@/components/skeleton/TimesSkeleton';
import { useEffect, useState } from 'react';

export default function AvailableTimes({ clinicId }: { clinicId: number }) {
  const { userId } = useAuth();
  const { setSelectedTime, selectedTime, selectedDay } = usePickTimeSlot();
  const [intialTime, _] = useState(selectedTime);
  const { clinicReservations, isLoading } = useGetReservation(
    clinicId,
    selectedDay,
  );

  const times = clinicReservations
    ?.filter(
      (resvation) =>
        !resvation.user || (resvation.user && resvation.userId == userId), // If there is a user was reserved the time and current user he is
    )
    .map((resvation) => resvation.scheduledAt);

  useEffect(() => {
    return () => {
      setSelectedTime(intialTime);
    };
  }, []);

  return (
    <AnimateParentScaleUp className="flex gap-2 flex-wrap justify-center max-h-[6rem] overflow-auto">
      {isLoading ? (
        <TimesSkeleton />
      ) : times?.length == 0 ? (
        <h2 className="px-1.5 py-1 text-center bg-white rounded-sm text-danger text-lg ">
          {clinicReservations?.length == 0
            ? 'This day is holiday'
            : 'There are no times avilable'}
        </h2>
      ) : (
        times?.map((date, index: number) => {
          const time = getTimeFromDate(new Date(date), false);
          return (
            <AnimateChildScaleUpChild
              key={time}
              onClick={() => setSelectedTime(time)}
              duration={index / 5}
              className={cn(
                `px-4 py-2 rounded-lg text-nowrap bg-primary-hover cursor-pointer text-white transition-all`,
                selectedTime == time && 'bg-primary',
              )}
            >
              {time}
            </AnimateChildScaleUpChild>
          );
        })
      )}
    </AnimateParentScaleUp>
  );
}
