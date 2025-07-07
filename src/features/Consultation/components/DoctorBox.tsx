
import DoctorVectorInfo from '../../Doctors/components/DoctorVectorInfo';
import { DoctorBoxProps } from '../types/consultaion';
import ConsultStatus from './ConsultStatus';


export default function DoctorBox({ doctor, children }: DoctorBoxProps ) {
  const { name, specility, description = null , date, status, time } = doctor;

  return (
    <div className="rounded-box flex flex-col space-y-3 ">
      <section className={`sm:flex justify-between gap-3 ${status && 'flex'} ${description == null ? 'flex-col' : 'flex-row'}`}>
        <DoctorVectorInfo name={name} specility={specility} />
        <ConsultStatus {...{date, status, time}} />
      </section>
      <div className={`font-serif text-secondary ${description == null ? 'hidden' : 'block'}`}>{description}</div>
      <div className="flex font-medium justify-between">{children}</div>
    </div>
  );
}
