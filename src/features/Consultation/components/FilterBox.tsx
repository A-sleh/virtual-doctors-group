import { useSearchParams } from 'react-router';
import { FilterBoxProps } from '../types/consultaion';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { cn } from '@/lib/utils';

export default function FilterBox({
  Icon,
  status,
  numberOfConsultation,
  bgColor,
  duration,
}: FilterBoxProps) {
  const [queryParams, setQueryParams] = useSearchParams();
  const selectedState = queryParams.get('filter');

  function handleChangeFilterState(newState: string) {
    if (newState == selectedState) setQueryParams({});
    else setQueryParams({ filter: status.toLowerCase() });
  }
  return (
    <AnimateFromToRight
      onClick={() => handleChangeFilterState(status.toLowerCase())}
      duration={duration}
      className={cn(
        `${bgColor} flex justify-between items-center rounded-xl flex-1 p-2 text-white cursor-pointer transition-all`,
        selectedState == status.toLowerCase() && 'scale-95 shadow-md',
      )}
    >
      <div className="flex flex-col gap-1.5 font-medium text-xl ">
        <p>{Number(numberOfConsultation)}</p>
        <h3>{status}</h3>
      </div>
      <Icon size={40} className="hidden sm:flex" />
    </AnimateFromToRight>
  );
}
