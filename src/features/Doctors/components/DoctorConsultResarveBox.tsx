// react icon components

import { doctorSearchingProps } from '../types/doctor';
import DoctorVectorInfo from './DoctorVectorInfo';
import DoctorStatistics from './DoctorStatistics';
import ConsultADoctor from '@/features/patient_Features/Models/ConsultADoctor.Model';
import PatientBooking from '@/features/patient_Features/Models/PatientBooking.Model';
import { PickTimeSlotProvider } from '@/context/reservation/PickTimeSlotProvieder';

export default function DoctorConsultResarveBox({
  doctor,
}: doctorSearchingProps) {
  const { name, specility, rating, exp: experianse, location } = doctor;

  return (
    <div className="rounded-box space-y-3">
      <div className="sm:flex justify-between space-y-2">
        <DoctorVectorInfo name={name} specility={specility} />
        <h3 className="font-medium px-2 h-fit bg-danger text-white rounded-tl-sm rounded-br-sm text-nowrap w-fit ml-auto">
          consultaion cost (<span className="font-bold">100$</span>)
        </h3>
      </div>
      <div className="text-secondary font-serif">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nisi,
        reprehenderit modi, est quibusdam ea adipisci sequi neque vitae
        assumenda eius laudantium a fuga rerum unde veniam at eaque laborum.
      </div>
      <div className="flex justify-between flex-col gap-5 lg:flex-row">
        <DoctorStatistics {...{ rating, experianse, location }} />
        <div className="flex gap-2 self-end ">
          <ConsultADoctor />
          <PickTimeSlotProvider intialDay={new Date()} intialTime={''}>
            <PatientBooking openKey={'Book appointment'} />
          </PickTimeSlotProvider>
        </div>
      </div>
    </div>
  );
}
