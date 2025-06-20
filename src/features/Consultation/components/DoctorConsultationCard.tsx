import { LiaCalendarDaySolid } from 'react-icons/lia';

export type consultaionContent = {
  specility: string;
  name: string;
  description: string;
  date: string;
  status: string;
};

const STATUSCOLORS = {
  opened: 'text-green-400 bg-[#29f50e45]',
  closed: 'text-red-400 bg-[#f50e0e53]',
  pending: 'text-yellow-400 bg-[#f1f50e6a]',
};

export default function DoctorConsultationCard({ doctor }: consultaionContent) {
  const { name, specility, description, date, status } = doctor;
  const colors = STATUSCOLORS[status];

  return (
    <div className="rounded-box flex flex-col space-y-2.5 ">
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
        <div className="flex flex-col justify-end items-end">
          <p className={` px-1.5 py-0.5 rounded-md ${colors} `}>{status}</p>
          <h3 className="flex gap-2 items-center text-md text-gray-400">
            <LiaCalendarDaySolid size={20} />
            {date}
          </h3>
        </div>
      </section>
      <div className="font-serif">{description}</div>
      <div className="flex gap-2.5 font-medium self-end">
        <button className="btn-rounded bg-[#1579e5] hover:bg-[#157ae59a] text-white transition-all duration-300 ">
          Open chat
        </button>
        <button className="btn-rounded bg-white text-red-600 border-1 transition-all duration-300 border-red-600 hover:bg-red-600 hover:text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}
