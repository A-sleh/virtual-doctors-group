import DoctorReservationCard from './components/DoctorReservationCard';
import { doctorData } from './api/data';

export default function Reservation() {
  return (
    <section className="space-y-2">
      <h2 className="sub-header">
        You have <span className="text-[#1579e5]">5</span> reservations
      </h2>
      <section className="flex flex-col gap-2.5 w-full">
        {doctorData.map((doctor) => {
          return <DoctorReservationCard doctor={doctor} />;
        })}
      </section>
    </section>
  );
}
