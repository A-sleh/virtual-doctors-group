import DoctorVectorInfo from '../../Doctors/components/DoctorVectorInfo';
import { DoctorBoxProps } from '../types/consultaion';
import ConsultStatus from './ConsultStatus';

export default function DoctorBox({ doctor, children }: DoctorBoxProps) {
  const { name, specility, description = null, date, status, time ,doctorId, imageUrl} = doctor;

  return (
    <div className={`rounded-box flex flex-col space-y-3 ${status == "Rejected" && 'border-2  border-danger'}`}>
      <section
        className={`sm:flex justify-between gap-3 ${status && 'flex'} ${
          description == null ? 'flex-col' : 'flex-row'
        }`}
      >
        <DoctorVectorInfo doctorId={doctorId} name={name} specility={specility} imgSrc={imageUrl} />
        <ConsultStatus date={date} status={status} time={time} />
      </section>
      <div
        className={`font-serif text-secondary ${
          description == null ? 'hidden' : 'block'
        }`}
      >
        {description}
      </div>
      <div className="flex font-medium justify-between">{children}</div>
    </div>
  );
}
