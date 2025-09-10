import { AnimateDownEffectInview } from '@/lib/Animation/AnimateDownEffect';
import { reservationBoxProps } from '../types/profile';
import HasPermission from '@/context/auth/HasPermission';
import { RiSettings5Fill } from 'react-icons/ri';
import { useState } from 'react';
import MinimalInput from '@/components/ui/inputs/MinimalInput';
import { IoMdClose } from 'react-icons/io';
import PatientBooking from '@/features/patient_Features/Models/PatientBooking.Model';
import { useAuth } from '@/context/auth/AuthProvider';
import { useParams } from 'react-router';
import DoctorInfoHeader from '@/features/patient_Features/Models/components/DoctorInfoHeader';
import { PickTimeSlotProvider } from '@/context/reservation/PickTimeSlotProvieder';
import AnimateButton from '@/lib/Animation/AnimateButton';

export default function ReservationBox({
  doctor,
  type,
  register,
  lcocation,
  reservationCost,
  children,
}: reservationBoxProps) {
  const { userId } = useAuth();
  const { clinicId } = useParams();

  const [updateCost, setUpdateCost] = useState(false);

  return (
    <AnimateDownEffectInview className="rounded-box p-0 overflow-hidden flex-1 relative w-full">
      <h1 className="p-5 font-bold text-lg flex items-center justify-between">
        {type}
        <HasPermission allowedTo={['doctor']}>
          {!updateCost ? (
            <RiSettings5Fill
              size={25}
              className="text-primary cursor-pointer"
              onClick={() => setUpdateCost(true)}
            />
          ) : (
            <IoMdClose
              size={25}
              className="text-danger cursor-pointer"
              onClick={() => setUpdateCost(false)}
            />
          )}{' '}
        </HasPermission>
      </h1>
      {updateCost ? (
        <>
          <div className="px-5 mb-5">
            <MinimalInput
              type="text"
              lable={type + ' cost'}
              unit="$"
              {...register}
            />
          </div>

          <AnimateButton
            scale={0.9}
            className="btn-rounded text-white bg-danger border-1 flex-1"
          >
            Apply
          </AnimateButton>
        </>
      ) : (
        children
      )}
      <div className="w-full ">
        <HasPermission allowedTo={['patient']}>
          <PickTimeSlotProvider intialDay={new Date()}>
            <PatientBooking
              openKey="Book"
              requestMethod="POST"
              reservationCots={reservationCost}
              clinicId={clinicId}
              reservationDetails={{
                userId,
                virtualId: Number(clinicId),
                text: 'help me',
              }}
            >
              <DoctorInfoHeader
                doctorId={doctor?.doctorId || 0}
                location={lcocation}
                name={`${doctor?.firstName} ${doctor?.lastName}`}
                specility={doctor?.speciality || ''}
              >
                <span className="font-light px-2 h-fit bg-danger text-white rounded-tl-sm rounded-br-sm text-nowrap">
                  {reservationCost === 0 ? 'Free' : `${reservationCost}$`}
                </span>
              </DoctorInfoHeader>
            </PatientBooking>
          </PickTimeSlotProvider>
        </HasPermission>
      </div>
    </AnimateDownEffectInview>
  );
}
