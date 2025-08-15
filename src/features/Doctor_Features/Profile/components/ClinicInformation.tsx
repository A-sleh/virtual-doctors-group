import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { useState } from 'react';
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
  const [updateClinicInfo, setUpdateClinicInfo] = useState(true);

  function handleUpdateFormClicked(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handlUpdateClicked() {
    setUpdateClinicInfo(true);
  }
  return (
    <AnimateDownEffect className="rounded-box p-6  w-full flex-3">
      <form className="space-y-3" onSubmit={(e) => handleUpdateFormClicked(e)}>
        <div className="text-3xl font-medium flex justify-between transition-all">
          <input
            {...register('name')}
            readOnly={!updateClinicInfo}
            className={`outline-0 ${
              updateClinicInfo ? 'border-b-4 border-primary pb-2' : ''
            }`}
          />
          <HasPermission allowedTo={['doctor']}>
            <AnimateButton withInitialScale={true}>
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
            </AnimateButton>
          </HasPermission>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            {...register('status')}
            readOnly={true}
            className={`font-bold text-white px-2 py-1 rounded-md  uppercase  ${
              clinicInfo?.status == 'open' ? 'bg-fourth' : 'bg-danger'
            }`}
          />

          {updateClinicInfo && (
            <LuRefreshCcw
              onClick={() =>
                setValue(
                  'status',
                  getValues('status') == 'open' ? 'close' : 'open',
                )
              }
              size={25}
              className="text-secondary hover:rotate-180 transition-all duration-300 cursor-pointer"
            />
          )}
        </div>
        <section className="flex gap-4 my-4">
          <div className="w-full">
            <label className=" text-2xl">The avreage of service</label> <br />
            <input
              type="text"
              {...register('avgService')}
              readOnly={!updateClinicInfo}
              className={`border-primary text-xl px-2 py-2 rounded-tl-md rounded-br-md mt-1 border outline-0 w-full ${
                updateClinicInfo
                  ? 'bg-white text-primary'
                  : 'bg-primary text-white'
              }`}
            />
          </div>
          <div className="w-full">
            <label className=" text-2xl">Located at</label> <br />
            <input
              type="text"
              {...register('location')}
              readOnly={!updateClinicInfo}
              className={`border-primary text-xl px-2 py-2 rounded-tl-md rounded-br-md mt-1 border outline-0 w-full ${
                updateClinicInfo
                  ? 'bg-white text-primary'
                  : 'bg-primary text-white'
              }`}
            />
          </div>
        </section>
        {updateClinicInfo && (
          <AnimateButton
            scale={0.9}
            className="btn-rounded text-white bg-danger border-1 flex-1"
          >
            Apply
          </AnimateButton>
        )}
      </form>
    </AnimateDownEffect>
  );
}
