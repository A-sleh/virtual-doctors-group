import { MdAccessTime } from 'react-icons/md';
import { consultStatusProps } from '../types/consultaion';
import { LiaCalendarDaySolid } from 'react-icons/lia';

const STATUSCOLORS = {
  opened: 'text-fourth bg-fourth-hover',
  closed: 'text-danger bg-danger-hover',
  pending: 'text-fivth  bg-fivth-hover',
};

export default function ConsultStatus({
  status ,
  date,
  time,
}: consultStatusProps) {
    
  let thereIsStatuscolors = null;
  if (status != undefined) {
    thereIsStatuscolors = STATUSCOLORS[status];
  }

  return (
    <div
      className={`flex ${
        thereIsStatuscolors ? 'flex-col items-end' : 'flex-row items-start'
      } justify-end gap-1 `}
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
  );
}
