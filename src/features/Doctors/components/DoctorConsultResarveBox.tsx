// react icon components
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import { doctorSearchingProps } from '../types/doctor';
import DoctorVectorInfo from './DoctorVectorInfo';
import AnimateButton from '@/lib/Animation/AnimateButton';
import DoctorStatistics from './DoctorStatistics';

export default function DoctorConsultResarveBox({
  doctor,
}: doctorSearchingProps) {
  const { name, specility, rating, exp : experianse, location } = doctor;

  return (
    <div className="rounded-box space-y-3">
      <div className="flex justify-between">
        <DoctorVectorInfo name={name} specility={specility} />
        <div className="flex  gap-1 text-center">
          <h3 className="font-medium px-2 h-fit bg-danger text-white rounded-tl-sm rounded-br-sm">
            consultaion cost (<span className="font-bold">100$</span>)
          </h3>
        </div>
      </div>
      <div className="text-secondary font-serif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi,
        reprehenderit modi, est quibusdam ea adipisci sequi neque vitae
        assumenda eius laudantium a fuga rerum unde veniam at eaque laborum.
      </div>
      <div className="flex justify-between flex-col gap-5 lg:flex-row">
        <DoctorStatistics {...{rating, experianse, location}} />
        <div className="flex gap-2 group self-end ">
          <AnimateButton scale={0.7} className="btn-rounded pr-1 flex gap-x-3 items-center bg-white text-primary border-1 transition-all duration-100 border-primary group-hover:bg-primary group-hover:text-white">
            Go to chat
            <MdKeyboardDoubleArrowRight className="group-hover:text-white text-primary" />
          </AnimateButton>
          <AnimateButton scale={0.7} className="btn-rounded  bg-primary hover:bg-primary-hover text-white transition-all duration-100 ">
            Book appointment
          </AnimateButton>
        </div>
      </div>
    </div>
  );
}
