import { AnimateDownEffectInview } from '@/lib/Animation/AnimateDownEffect';
import { reservationBoxProps } from '../types/profile';
import HasPermission from '@/context/auth/HasPermission';
import { RiSettings5Fill } from 'react-icons/ri';
import { useState } from 'react';
import MinimalInput from '@/components/ui/inputs/MinimalInput';
import { IoMdClose } from 'react-icons/io';
import PatientBooking from '@/features/patient_Features/Models/PatientBooking.Model';
import { useAuth } from '@/context/auth/AuthProvider';

export default function ReservationBox({
  type,
  register,
  children,
}: reservationBoxProps) {
  const { userId } = useAuth();
  const [updateCost, setUpdateCost] = useState(false);

  return (
    <AnimateDownEffectInview className="rounded-box p-0 overflow-hidden">
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
        <div className="px-5 mb-5">
          <MinimalInput
            type="text"
            lable={type + ' cost'}
            unit="$"
            {...register}
          />
        </div>
      ) : (
        children
      )}
      <HasPermission allowedTo={[ 'patient']} condition={updateCost}>
        <PatientBooking
          openKey="Book"
          requestMethod="POST"
          // reservationDetails={{userId,virtualId:,}}
        />
      </HasPermission>
    </AnimateDownEffectInview>
  );
}
