import HasPermission from '@/context/auth/HasPermission';
import DiscriptionCard from './components/DiscriptionCard';
import MapSnapShot from './components/MapSnapShot';
import ReservationBox from './components/ReservationBox';
import WorkingTime from './components/WorkingTime';
import { isPatient } from '@/lib/auth';
import { useAuth } from '@/context/auth/AuthProvider';
import { useGetClinicDetails } from './api/get-profile-info';
import { useParams } from 'react-router';
import ClinicInformation from './components/ClinicInformation';
import { useForm } from 'react-hook-form';

export default function ClinicDetails() {
  const { ROLE } = useAuth();
  const { clinicId } = useParams();
  const { clinicDetails, isPending } = useGetClinicDetails(Number(clinicId));
  const { register, handleSubmit, setValue, getValues } = useForm({
    defaultValues: clinicDetails,
  });
  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <ClinicInformation
          clinicInfo={clinicDetails}
          register={register}
          setValue={setValue}
          getValues={getValues}
        />
        <MapSnapShot />
      </div>
      <div className="flex gap-3">
        <WorkingTime dayHours={['Sun', 'Mun', 'Tue', 'Thur']} />

        <div className="flex-1/12 space-y-2">
          <ReservationBox type={isPatient(ROLE) ? 'Preview now' : 'Preview'}>
            <div className="p-5 space-y-1">
              <h2 className="text-primary flex w-full justify-between items-center">
                Prwview cost{' '}
                <span className="text-white px-3 py-0.5 h-fit bg-danger rounded-tr-sm rounded-bl-sm ">
                  50 $
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
            type={isPatient(ROLE) ? 'Book an appointment now' : 'Booking'}
          >
            <div className="p-5 space-y-1">
              <h2 className="text-primary flex w-full justify-between items-center">
                Preview cost{' '}
                <span className="text-white px-3 py-0.5 h-fit bg-danger rounded-tr-sm rounded-bl-sm ">
                  100 $
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
    </div>
  );
}
