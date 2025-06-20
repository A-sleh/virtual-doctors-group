import React from 'react';
import { doctorData } from './api/data';
// React icons
import { IoIosTimer } from 'react-icons/io';
import { TfiCheckBox } from 'react-icons/tfi';
import { GoStop } from 'react-icons/go';

import DoctorConsultationCard, {
  consultaionContent,
} from './components/DoctorConsultationCard';
import FilterBox from './components/FilterBox';

export default function Consultation() {
  return (
    <section className="space-y-3">
      <header className="grid sm:grid-cols-2 md:grid-cols-3 bg-white p-2 rounded-xl gap-2 dark:bg-black overflow-hidden">
        <FilterBox
          Icon={GoStop}
          status={'CLOSED'}
          numberOfConsultation={43}
          bgColor="bg-red-500"
        />
        <FilterBox
          Icon={TfiCheckBox}
          status={'OPNED'}
          numberOfConsultation={103}
          bgColor="bg-green-500"
        />
        <FilterBox
          Icon={IoIosTimer}
          status={'PENDING'}
          numberOfConsultation={23}
          bgColor="bg-yellow-300"
        />
      </header>
      <section className="flex flex-col gap-2.5 w-full">
        {doctorData.map((doctor: consultaionContent) => {
          return <DoctorConsultationCard doctor={doctor} />;
        })}
      </section>
    </section>
  );
}
