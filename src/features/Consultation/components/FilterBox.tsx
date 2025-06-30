import { FilterBoxProps } from '../types/consultaion';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

export default function FilterBox({
  Icon,
  status,
  numberOfConsultation,
  bgColor,
  duration,
}: FilterBoxProps) {
  return (
    <AnimateFromToRight
      duration={duration}
      className={`${bgColor} flex justify-between items-center rounded-xl flex-1 p-2 text-white`}
    >
      <div className="flex flex-col gap-1.5 font-medium text-xl">
        <p>{Number(numberOfConsultation)}</p>
        <h3>{status}</h3>
      </div>
      <Icon size={40} />
    </AnimateFromToRight>
  );
}
