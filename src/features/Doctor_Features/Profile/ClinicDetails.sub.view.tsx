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
import { useEffect } from 'react';
import Loader from '@/components/ui/loader/Loader';
import { useUpdateClinicInfo } from './api/update-profile-info';

import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import { useUrlPosition } from '@/hooks/useUrlPosition';

export default function ClinicDetails() {
  const { ROLE } = useAuth();
  const { clinicId } = useParams();
  const queryClient = useQueryClient();

  const { clinicDetails, isPending } = useGetClinicDetails(Number(clinicId));
  const { lat, lng } = useUrlPosition();
  const { isPending: clinicInfoUpdateing, updateClinicInfo } =
    useUpdateClinicInfo();
  const { register, handleSubmit, setValue, getValues, reset } = useForm({
    defaultValues: clinicDetails,
  });

  

  const onSubmit: SubmitHandler<typeof clinicDetails> = (data, e) => {
    e?.preventDefault();
    const locationCoords = lat
      ? `${lat},${lng}`
      : clinicDetails?.locationCoords;

    updateClinicInfo(
      {
        ...data,
        locationCoords: locationCoords,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [QYERY_KEYS.doctor.clinicDetails],
          });
        },
      },
    );
  };

  useEffect(() => {
    if (clinicDetails) {
      reset(clinicDetails);
    }
  }, [clinicDetails]);

  if (isPending || clinicInfoUpdateing) {
    return <Loader variant="bars" className="text-primary" size={80} />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          <ClinicInformation
            clinicInfo={clinicDetails}
            register={register}
            setValue={setValue}
            getValues={getValues}
          />
          <ReservationBox
            reservationCost={clinicDetails?.previewCost}
            lcocation={clinicDetails?.location}
            doctor={clinicDetails?.doctor}
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
          <MapSnapShot
            clinicTitle={clinicDetails?.name || ''}
            locationCoords={clinicDetails?.locationCoords || '22,22'}
          />
        </div>
      </form>
      <div className="flex gap-3">
        <WorkingTime />
      </div>
    </>
  );
}
