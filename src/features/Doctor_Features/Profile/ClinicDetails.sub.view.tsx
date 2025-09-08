import { useParams } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';

import MapSnapShot from './components/MapSnapShot';
import ReservationBox from './components/ReservationBox';
import WorkingTime from './components/WorkingTime';
import ClinicInformation from './components/ClinicInformation';

import { isPatient } from '@/lib/auth';

import HasPermission from '@/context/auth/HasPermission';
import { useAuth } from '@/context/auth/AuthProvider';
import { useGetClinicDetails } from './api/get-profile-info';

export default function ClinicDetails() {
  const { ROLE } = useAuth();
  const { clinicId } = useParams();
  const { clinicDetails, isPending } = useGetClinicDetails(Number(clinicId));
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: clinicDetails,
  });

  const onSubmit: SubmitHandler<typeof clinicDetails> = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex gap-3">
        <ClinicInformation
          clinicInfo={clinicDetails}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
        <MapSnapShot
          locationCoords={clinicDetails?.locationCoords || '22,22'}
        />
      </div>
      <div className="flex gap-3">
        <WorkingTime dayHours={['Sun', 'Mun', 'Tue', 'Thur']} />

        <div className="flex-1/12 space-y-2">
          <ReservationBox
            register={{ ...register('doctor.ticketCost') }}
            type={isPatient(ROLE) ? 'Preview now' : 'Preview'}
          >
            <div className="p-5 space-y-1">
              <h2 className="text-primary flex w-full justify-between items-center">
                Prwview cost{' '}
                <span className="text-white px-3 py-0.5 h-fit bg-danger rounded-tr-sm rounded-bl-sm ">
                  {clinicDetails?.doctor?.ticketCost == 0
                    ? `Free`
                    : `${clinicDetails?.doctor?.ticketCost} $`}
                </span>
              </h2>
              <HasPermission allowedTo={['patient']}>
                <p className="text-secondary font-serif">
                  If you have any considerations don't hassitate to consult me
                </p>
              </HasPermission>
            </div>
          </ReservationBox>

          <ReservationBox
            register={{ ...register('previewCost') }}
            type={isPatient(ROLE) ? 'Book an appointment now' : 'Booking'}
          >
            <div className="p-5 space-y-1">
              <h2 className="text-primary flex w-full justify-between items-center">
                Preview cost{' '}
                <span className="text-white px-3 py-0.5 h-fit bg-danger rounded-tr-sm rounded-bl-sm ">
                  {clinicDetails?.previewCost == 0
                    ? `Free`
                    : `${clinicDetails?.previewCost} $`}
                </span>
              </h2>
              <HasPermission allowedTo={['patient']}>
                <p className="text-secondary font-serif">
                  You can chopse best time for you or book appointment ASAP
                </p>
              </HasPermission>
            </div>
          </ReservationBox>
        </div>
      </div>
    </form>
  );
}
