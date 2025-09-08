import { IoMdSettings } from 'react-icons/io';

import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import Map from '@/lib/googleMap/Maps';
import { isPatient } from '@/lib/auth';
import { useAuth } from '@/context/auth/AuthProvider';

export default function MapSnapShot({
  locationCoords,
}: {
  locationCoords: string;
}) {
  const {ROLE} = useAuth() 
  return (
    <AnimateFromToRight
      offsetValue={100}
      className="rounded-box  flex-1 gap-1 flex flex-col"
    >
      <div className="flex gap-1 justify-end">
        <HasPermission allowedTo={['doctor']}>
          <AnimateButton scale={0.9}>
            <IoMdSettings
              size={25}
              className="transition-all text-primary hover:text-primary-hover cursor-pointer"
            />
          </AnimateButton>
        </HasPermission>
      </div>
      <div className="w-full h-[15rem] bg-fourth rounded-md">
        <Map
          showOnly={isPatient(ROLE)}
          zoom={100}
          withControle={isPatient(ROLE)}
          defaultPosition={locationCoords.split(',')}
          resize={true}
        />
      </div>
    </AnimateFromToRight>
  );
}
