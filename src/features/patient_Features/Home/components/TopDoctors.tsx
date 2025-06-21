import { topDoctors } from '../api/data';
import DoctorInfo from './DoctorInfo';
import Header from './Header';

type topDoctorsProps = {
  limitNumber: number;
};

export default function TopDoctors({ limitNumber = 2 }: topDoctorsProps) {
  const doctors = topDoctors.slice(0, limitNumber);

  return (
    <section className="flex flex-col gap-2">
      <Header title="Top doctors" />
      <div className="grid md:grid-cols-2  gap-2">
        {doctors.map((doctor) => {
          return <DoctorInfo doctor={doctor} rating={doctor.rating} />;
        })}
      </div>
    </section>
  );
}
