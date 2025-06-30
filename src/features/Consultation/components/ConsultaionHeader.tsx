import { IoIosTimer } from 'react-icons/io';
import { TfiCheckBox } from 'react-icons/tfi';
import { GoStop } from 'react-icons/go';
import FilterBox from './FilterBox';

export default function ConsultaionHeader() {
  return (
    <header className="grid sm:grid-cols-2 md:grid-cols-3 bg-white p-2 rounded-xl gap-2 dark:bg-black overflow-hidden">
      <FilterBox
        Icon={GoStop}
        status={'CLOSED'}
        duration={0.6}
        numberOfConsultation={43}
        bgColor="bg-danger"
      />
      <FilterBox
        Icon={TfiCheckBox}
        status={'OPNED'}
        duration={1}
        numberOfConsultation={103}
        bgColor="bg-fourth"
      />
      <FilterBox
        Icon={IoIosTimer}
        status={'PENDING'}
        duration={1.8}
        numberOfConsultation={23}
        bgColor="bg-[#fffb00]"
      />
    </header>
  );
}
