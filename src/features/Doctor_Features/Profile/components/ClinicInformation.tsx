import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';

import { useState } from 'react';
import { LiaBusinessTimeSolid } from 'react-icons/lia';
import { MdLocationPin } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { RiSettings5Fill } from 'react-icons/ri';
import { IClinicDetailsResponse } from '../api/get-profile-info';
import { LuRefreshCcw } from 'react-icons/lu';
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

export default function ClinicInformation({
  clinicInfo,
  register,
  setValue,
  getValues,
}: {
  clinicInfo: IClinicDetailsResponse | undefined;
  register: UseFormRegister<IClinicDetailsResponse>;
  setValue: UseFormSetValue<IClinicDetailsResponse>;
  getValues: UseFormGetValues<IClinicDetailsResponse>;
}) {
  const [updateClinicInfo, setUpdateClinicInfo] = useState(false);

  function handlUpdateClicked() {
    setUpdateClinicInfo(true);
  }

  return (
    <AnimateDownEffect className="rounded-box p-6 flex-[0.5]">
      <div className="space-y-3 flex-[0.5]">
        <div>
          <div className="text-3xl font-medium flex justify-between transition-all">
            <input
              {...register('name')}
              readOnly={!updateClinicInfo}
              className={`outline-0 ${
                updateClinicInfo ? 'border-b-4 border-primary pb-2' : ''
              }`}
            />

            <HasPermission allowedTo={['doctor']}>
              {!updateClinicInfo ? (
                <RiSettings5Fill
                  size={25}
                  className="text-primary cursor-pointer"
                  onClick={() => handlUpdateClicked()}
                />
              ) : (
                <IoMdClose
                  size={25}
                  className="text-danger cursor-pointer"
                  onClick={() => setUpdateClinicInfo(false)}
                />
              )}
            </HasPermission>
          </div>
          <div className="flex gap-3">
            {updateClinicInfo && (
              <LuRefreshCcw
                onClick={() =>
                  setValue(
                    'status',
                    getValues('status') == 'Active' ? 'Close' : 'Active',
                  )
                }
                size={25}
                className="text-secondary hover:rotate-180 transition-all duration-300 cursor-pointer"
              />
            )}

            <input
              type="text"
              {...register('status')}
              readOnly={true}
              className={` text-white px-2 py-1 rounded-md min-w-[10px] font-bold  uppercase w-[4rem] block ${
                clinicInfo?.status == 'open' ? 'bg-fourth' : 'bg-danger'
              }`}
            />
          </div>
        </div>

        <div className="flex items-center p-1 gap-2 text-xl  ">
          <MdLocationPin size={25} />
          <input
            type="text"
            {...register('location')}
            readOnly={!updateClinicInfo}
            className={` ${updateClinicInfo && 'outline-0'} `}
          />
        </div>

        <div className="flex items-center p-1 gap-2 w-fit text-xl  ">
          <LiaBusinessTimeSolid size={25} />
          <div className="relative">
            <input
              type="text"
              {...register('avgService')}
              readOnly={!updateClinicInfo}
              className={` ${updateClinicInfo && 'outline-0'} `}
            />
            <span className="absolute left-7 text-primary">/ min</span>
          </div>
        </div>

        {updateClinicInfo && (
          <AnimateButton
            scale={0.9}
            className="btn-rounded text-white bg-danger border-1 flex-1"
          >
            Apply
          </AnimateButton>
        )}
      </div>
    </AnimateDownEffect>
  );
}
