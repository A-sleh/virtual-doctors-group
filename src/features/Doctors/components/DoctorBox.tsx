import { consultaionContent } from '@/features/Consultation/components/DoctorConsultationCard';
import { LiaCalendarDaySolid } from 'react-icons/lia';
import { MdAccessTime } from 'react-icons/md';
import DoctorVectorInfo, { doctorInfoProps } from './DoctorVectorInfo';

type DoctorBoxProps = consultaionContent & {
  children: React.ReactNode;
  doctor: {
    description: string;
    date: string;
    time?: string;
    status?: string;
  } & doctorInfoProps;
};

const STATUSCOLORS = {
  opened: 'text-fourth bg-fourth-hover',
  closed: 'text-danger bg-danger-hover',
  pending: 'text-fivth  bg-fivth-hover',
};

export default function DoctorBox({ doctor, children }: DoctorBoxProps) {
  const { name, specility, description = null , date, status, time } = doctor;
  let thereIsStatuscolors = false;
  if (status != undefined) {
    thereIsStatuscolors = STATUSCOLORS[status];
  }

  return (
    <div className="rounded-box flex flex-col space-y-3 ">
      <section className={`flex justify-between gap-3 ${description == null ? 'flex-col' : 'flex-row'}`}>
        <DoctorVectorInfo name={name} specility={specility} />
        <div
          className={`flex ${
            thereIsStatuscolors ? 'flex-col items-end' : 'flex-row items-start'
          } justify-end  gap-1 `}
        >
          {thereIsStatuscolors ? (
            <p className={` px-1.5 py-0.5 rounded-md ${thereIsStatuscolors} `}>
              {status}
            </p>
          ) : (
            <h3 className="flex gap-2 items-center text-md text-secondary">
              <MdAccessTime size={25} />
              {time}
            </h3>
          )}
          <h3 className="flex gap-2 items-center text-md text-secondary">
            <LiaCalendarDaySolid size={25} />
            {date}
          </h3>
        </div>
      </section>
      <div className={`font-serif text-secondary ${description == null ? 'hidden' : 'block'}`}>{description}</div>
      <div className="flex font-medium justify-between">{children}</div>
    </div>
  );
}
