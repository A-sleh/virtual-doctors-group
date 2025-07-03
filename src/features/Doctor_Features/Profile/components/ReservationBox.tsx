import { AnimateDownEffectInview } from '@/lib/Animation/AnimateDownEffect';
import { reservationBoxProps } from '../types/profile';
import HasPermission from '@/context/auth/HasPermission';
import { RiSettings5Fill } from 'react-icons/ri';
import AnimateButton from '@/lib/Animation/AnimateButton';

export default function ReservationBox({
  type,
  children,
}: reservationBoxProps) {
  return (
    <AnimateDownEffectInview className="rounded-box p-0 overflow-hidden">
      <h1 className="p-5 font-bold text-lg flex items-center justify-between">
        {type}
        <HasPermission allowedTo={['doctor']}>
          <AnimateButton withInitialScale={true}>
            <RiSettings5Fill
              size={25}
              className="text-primary cursor-pointer"
            />
          </AnimateButton>
        </HasPermission>
      </h1>
      {children}
      <HasPermission allowedTo={['patient']}>
        <button className="text-center  bg-primary w-full p-2 text-white font-medium">
          {type}
        </button>
      </HasPermission>
    </AnimateDownEffectInview>
  );
}
