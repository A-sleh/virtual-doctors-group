// react icon components
import { IoLocationSharp } from 'react-icons/io5';

import { IDoctorInfo } from '../api/get-doctor';
import DoctorVectorInfo from './DoctorVectorInfo';
import DoctorStatistics from './DoctorStatistics';
import ConsultADoctor from '@/features/patient_Features/Models/ConsultADoctor.Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { useNavigate } from 'react-router';
import { paths } from '@/config/paths';

export default function DoctorDetails({ doctor }: { doctor: IDoctorInfo }) {
  const {
    doctorId,
    doctorName,
    ticketCost,
    ticketOption,
    doctorDescription,
    rating,
    clinics,
    speciality,
    shortestDistanceLocation,
  } = doctor;

  const goto = useNavigate();

  const openForConsultaion = ticketOption !== 'none';

  return (
    <div className="rounded-box space-y-3">
      <div className="sm:flex justify-between space-y-2">
        <DoctorVectorInfo
          name={doctorName}
          imgSrc={doctor?.imageUrl}
          specility={speciality}
          doctorId={doctorId}
        />
        <div className="space-y-2 h-fit">
          {openForConsultaion ? (
            <>
              <h3 className="font-medium px-2 h-fit bg-danger text-white rounded-tl-sm rounded-br-sm text-nowrap w-fit ml-auto">
                <span className="font-bold">
                  consultation {ticketCost == 0 ? 'Free' : `${ticketCost} $`}
                </span>
              </h3>
              <DoctorStatistics
                rating={Math.floor(rating)}
                location={shortestDistanceLocation}
              />
            </>
          ) : (
            <h3 className="font-medium px-2 h-fit bg-danger text-white rounded-tl-sm rounded-br-sm text-nowrap w-fit ml-auto">
              Close for consultaion
            </h3>
          )}
        </div>
      </div>
      <div className="text-secondary font-serif">{doctorDescription}</div>

      <div className="flex justify-between flex-col gap-5 lg:flex-row">
        <div>
          <h3 className="text-primary font-bold">Clinics</h3>
          <div className="flex gap-2 my-1">
            {clinics.map((clinic) => {
              return (
                <span
                  onClick={() =>
                    goto(
                      paths.app.doctor.profile.info.clinic.getHref(
                        doctorId,
                        clinic.clinicId,
                      ),
                    )
                  }
                  className="flex gap-0.5 items-center text-white bg-primary px-2 pl-1 py-1 rounded-sm cursor-pointer"
                >
                  <IoLocationSharp size={14} />
                  {clinic.location}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex gap-2 self-end ">
          {openForConsultaion && (
            <ConsultADoctor
              doctorId={doctorId}
              cost={ticketCost}
              doctor={{
                name: doctorName,
                specility: 'fofo',
                location: shortestDistanceLocation,
              }}
            />
          )}
          <AnimateButton
            onClick={() =>
              goto(paths.app.doctor.profile.info.clinics.getHref(doctorId))
            }
            className="btn-rounded  bg-primary text-white border border-primary"
          >
            Book appointment
          </AnimateButton>
        </div>
      </div>
    </div>
  );
}
