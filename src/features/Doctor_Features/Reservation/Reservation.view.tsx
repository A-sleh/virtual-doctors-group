import { data } from './api/data';
import ReservatDayCard from './components/ReservatDayCard';
import ReservationHeader from './components/ReservationHeader';
import Calendar from './components/Calendar';
import Booking from '../Models/Booking.Model';
import { CalenderProvider, useCalender } from '@/context/reservation/Calender';
import { useGetReservation } from './api/get-clinic-reservation';
import { PickTimeSlotProvider } from '@/context/reservation/PickTimeSlotProvieder';

export default function Reservation() {
  const { day } = useCalender();
  const { clinicReservations } = useGetReservation(1, day as Date);
  console.log(clinicReservations);
  return (
    <PickTimeSlotProvider intialTime="10:12" intialDay={new Date()}>
      <CalenderProvider>
        <section className="flex flex-col-reverse lg:flex-row gap-2 text-nowrap">
          <div className="flex-1 space-y-2">
            <div className="sub-header">Today reservation</div>
            <div className="flex w-full flex-col gap-1">
              {data.map((reservation, index: number) => (
                <ReservatDayCard
                  reservation={reservation}
                  duration={index / 2}
                  key={reservation.owner}
                />
              ))}
              <Booking />
            </div>
          </div>
          <div className="flex-4 space-y-2">
            <ReservationHeader />
            <Calendar />
          </div>
        </section>
      </CalenderProvider>
    </PickTimeSlotProvider>
  );
}
