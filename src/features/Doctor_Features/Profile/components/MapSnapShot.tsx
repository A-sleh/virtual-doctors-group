import { IoMdClose, IoMdSettings } from 'react-icons/io';

import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import Map from '@/lib/googleMap/Maps';
import { isPatient } from '@/lib/auth';
import { useAuth } from '@/context/auth/AuthProvider';
import { RiSettings5Fill } from 'react-icons/ri';
import { useState } from 'react';
import { useUrlPosition } from '@/hooks/useUrlPosition';

export default function MapSnapShot({
  locationCoords,
  clinicTitle,
}: {
  locationCoords: string;
  clinicTitle: string;
}) {
  const { ROLE } = useAuth();
  const [updateLocation, setUpdateLocation] = useState(false);
  const { setSearchParams } = useUrlPosition();
  return (
    <AnimateFromToRight
      offsetValue={100}
      className="rounded-box  flex-[1.5] gap-1 flex flex-col"
    >
      <div className="flex gap-1 justify-end">
        <HasPermission allowedTo={['doctor']}>
          {!updateLocation ? (
            <RiSettings5Fill
              size={25}
              className="text-primary cursor-pointer"
              onClick={() => setUpdateLocation(true)}
            />
          ) : (
            <IoMdClose
              size={25}
              className="text-danger cursor-pointer"
              onClick={() => {setUpdateLocation(false)}}
            />
          )}{' '}
        </HasPermission>
      </div>
      <div className="w-full h-[15rem] bg-fourth rounded-md">
        <Map
          showOnly={isPatient(ROLE) || !updateLocation}
          zoom={100}
          withControle={isPatient(ROLE)}
          defaultPosition={locationCoords.split(',')}
          clinicTitle={clinicTitle}
          resize={true}
        />
      </div>
      {updateLocation && (
        <AnimateButton
          scale={0.9}
          className="btn-rounded text-white bg-danger border-1 flex-1"
        >
          Apply
        </AnimateButton>
      )}
    </AnimateFromToRight>
  );
}
