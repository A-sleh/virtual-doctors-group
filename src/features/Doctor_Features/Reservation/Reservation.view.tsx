import ReservatDayCard from './components/ReservatDayCard';
import ReservationHeader from './components/ReservationHeader';
import Calendar from './components/Calendar';

import { CalenderProvider } from '@/context/reservation/CalenderProvider';
import { useGetReservation } from './api/get-clinic-reservation';
import { useCurrentClinic } from '@/context/doctor/CurrentClinicProvider';
import ClinicReservationSkeleton from '@/components/skeleton/ClinicReservationSkeleton';
import { useState } from 'react';
import { getFullYearAsString, getTimeFromDate } from '@/utils';

export default function Reservation() {
  const [day, setDay] = useState<Date>(new Date());
  const { clinic } = useCurrentClinic();
  const { clinicReservations, isLoading } = useGetReservation(
    clinic.id,
    getFullYearAsString(day),
  );
  const filteredReservations = clinicReservations?.filter(
    (reservation) => reservation.user != null,
  );

  return (
    <CalenderProvider setParentDay={setDay}>
      <section className="flex flex-col-reverse lg:flex-row gap-2 text-nowrap ">
        <div className="flex-1 space-y-2">
          <div className="sub-header">Today reservation</div>
          <div className="flex w-full flex-col gap-1 ">
            {isLoading ? (
              <ClinicReservationSkeleton />
            ) : filteredReservations?.length == 0 ? (
              <h2 className="px-1.5 py-1 text-center bg-white rounded-sm text-danger ">
                There are no reservations
              </h2>
            ) : (
              filteredReservations?.map(
                (
                  {
                    userId,
                    scheduledAt,
                    text,
                    user,
                    status,
                    type,
                    id,
                    virtualId,
                  },
                  index: number,
                ) => (
                  <ReservatDayCard
                    reservation={{
                      id,
                      status,
                      clinicId: virtualId,
                      type,
                      desctiption: text,
                      userId,
                      owner: user?.firstName + ' ' + user?.lastName,
                      time: getTimeFromDate(new Date(scheduledAt), false),
                    }}
                    duration={index / 2}
                    key={userId}
                  />
                ),
              )
            )}
          </div>
        </div>
        <div className="flex-4 space-y-2">
          <ReservationHeader />
          <Calendar />
        </div>
      </section>
    </CalenderProvider>
  );
}
