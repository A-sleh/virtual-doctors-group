import { IoIosTimer } from 'react-icons/io';
import { TfiCheckBox } from 'react-icons/tfi';
import { GoStop } from 'react-icons/go';
import FilterBox from './FilterBox';
import { IGetConsultaionsResponse } from '../api/get-consultaion';
import { calcTheNumbersOfConsultaions } from '@/utils';

export default function ConsultaionHeader({
  consultaions,
}: {
  consultaions: IGetConsultaionsResponse[];
}) {
  const { closed, opened, pending,Rejected } =
    calcTheNumbersOfConsultaions(consultaions);
  return (
    <header className="grid grid-cols-4 bg-white p-2 rounded-xl gap-2 dark:bg-black overflow-hidden">
      <FilterBox
        Icon={GoStop}
        status={'CLOSED'}
        duration={0.1}
        numberOfConsultation={closed}
        bgColor="bg-danger"
      />
      <FilterBox
        Icon={TfiCheckBox}
        status={'OPEN'}
        duration={0.3}
        numberOfConsultation={opened}
        bgColor="bg-fourth"
      />
      <FilterBox
        Icon={IoIosTimer}
        status={'PENDING'}
        duration={0.6}
        numberOfConsultation={pending}
        bgColor="bg-[#fffb00]"
      />
      <FilterBox
        Icon={IoIosTimer}
        status={'REJECTED'}
        duration={1}
        numberOfConsultation={Rejected}
        bgColor="bg-[#ff2600ce]"
      />
    </header>
  );
}
