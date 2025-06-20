import { consultaionContent } from '@/features/Consultation/components/DoctorConsultationCard';
import { LiaCalendarDaySolid } from 'react-icons/lia';
import { MdAccessTime } from 'react-icons/md';

type DoctorBoxProps = consultaionContent & {
  children: React.ReactNode;
  doctor: {
    specility: string;
    name: string;
    description: string;
    date: string;
    time?: string;
    status?: string;
  };
};

const STATUSCOLORS = {
  opened: 'text-green-400 bg-[#29f50e45]',
  closed: 'text-red-400 bg-[#f50e0e53]',
  pending: 'text-yellow-400 bg-[#f1f50e6a]',
};

export default function DoctorBox({ doctor, children }: DoctorBoxProps) {
  const { name, specility, description, date, status, time } = doctor;
  let thereIsStatuscolors = false;
  if (status != undefined) {
    thereIsStatuscolors = STATUSCOLORS[status];
  }

  return (
    <div className="rounded-box flex flex-col space-y-3 ">
      <section className="flex justify-between">
        <div className="flex gap-2">
          <img
            src=""
            alt="doctor image"
            className="rounded-full w-14 h-14 bg-black"
          />
          <div className="flex flex-col gap-y-1">
            <p className=" font-medium">
              <span className="text-[#1579e5] ">Dr.</span>
              {name}
            </p>
            <span className="text-gray-400 bg-[#8b8b8b2a] px-2 py-0 rounded-md w-fit">
              {specility}
            </span>
          </div>
        </div>
        <div
          className={`flex ${
            thereIsStatuscolors ? 'flex-col items-end' : 'flex-row items-start'
          } justify-end  gap-1`}
        >
          {thereIsStatuscolors ? (
            <p className={` px-1.5 py-0.5 rounded-md ${thereIsStatuscolors} `}>
              {status}
            </p>
          ) : (
            <h3 className="flex gap-2 items-center text-md text-gray-400">
              <MdAccessTime size={25} />
              {time}
            </h3>
          )}
          <h3 className="flex gap-2 items-center text-md text-gray-400">
            <LiaCalendarDaySolid size={25} />
            {date}
          </h3>
        </div>
      </section>
      <div className="font-serif">{description}</div>
      <div className="flex font-medium justify-between">{children}</div>
    </div>
  );
}
