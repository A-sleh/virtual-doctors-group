
import DoctorReservationCard from "./components/DoctorReservationCard";
import { doctorData } from "./api/data";

export default function Reservation() {
  return (
    <section className="space-y-2">
      <h2 className="text-xl p-2 bg-white rounded-lg dark:bg-black dark:text-white font-bold">
        You have <span className="text-[#1579e5]">5</span> reservations
      </h2>
      <section className="flex flex-col gap-2.5 w-full">
        {doctorData.map((doctor) => {
          return <DoctorReservationCard doctor={doctor}/>;
        })}
      </section>
    </section>
  );
}
