
import { data } from './api/data';
import ReservatDayCard from './components/ReservatDayCard';
import ReservationHeader from './components/ReservationHeader';
import Calendar from './components/Calendar';
import AnimateButton from '@/lib/Animation/AnimateButton';
import Booking from '../Models/Booking.Model';


export default function Reservation() {
  return (
    <section className="flex gap-2 text-nowrap">
      <div className="flex-1 space-y-2">
        <div className="sub-header">Today reservation</div>
        <div className="flex w-full flex-col gap-1">
          {data.map((reservation , index: number) => (
            <ReservatDayCard reservation={reservation} duration={index / 2} />
          ))}
          <Booking />
        </div>
      </div>
      <div className="flex-4 space-y-2">
        <ReservationHeader />
        <Calendar />
      </div>
    </section>
  );
}
