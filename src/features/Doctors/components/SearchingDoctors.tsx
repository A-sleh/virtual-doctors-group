import { doctors } from '../api/data';
import DoctorConsultResarveBox from './DoctorConsultResarveBox';

export type doctorSearching = {
  name: string;
  specility: string;
  location: string;
  rating: number;
  exp: string;
};

export default function SearchingDoctors() {
  return (
    <section className="w-full rounded-md space-y-3 h-full overflow-hidden">
      <header className="sub-header">
        <span className="text-primary">45</span> Doctors Available
      </header>
      <div className="flex flex-col gap-2 overflow-y-auto h-full pb-20 " >
        {doctors.map((doctor: doctorSearching) => {
          return <DoctorConsultResarveBox doctor={doctor} />;
        })}
      </div>
    </section>
  );
}
