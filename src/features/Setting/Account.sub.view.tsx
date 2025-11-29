import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  accountInputs,
  accountInputsErrorMessages,
  accountSettingFormIsNotValid,
  useUpdateAccountSetting,
} from './api/updata-account.ts';

import Selector from '@/components/ui/inputs/Selector';
import SettingInput from '@/components/ui/inputs/SettingInput';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import AnimateButton from '@/lib/Animation/AnimateButton';

import ZodErrors from '@/components/custom/ZodErrors.tsx';
import Loader from '@/components/ui/loader/Loader.tsx';
import { useUserProfile } from '../auth/api/useUser.tsx';
import { removeKeys } from '@/utils/index.ts';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key.ts';

export default function Account() {

  const queryClient = useQueryClient()
  const [filedInvalidMessage, setFiledInvalidMessage] = useState<accountInputsErrorMessages>();

  const { register, handleSubmit, reset } = useForm<accountInputs>();
  const { userProfile, isPending: isFetchUserInfo } = useUserProfile();
  const { updateAccountSetting, isPending } = useUpdateAccountSetting();

  const onSubmit: SubmitHandler<accountInputs> = (data) => {
    let errorMessage;
    if ((errorMessage = accountSettingFormIsNotValid(data))) {
      setFiledInvalidMessage(errorMessage as accountInputsErrorMessages);
      return;
    }

    updateAccountSetting(data,{
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QYERY_KEYS.patient.userProfile]
        })
      }
    });
  };

  useEffect(() => {
    if (userProfile) {
      reset(removeKeys({ ...userProfile }, ['role', 'userId', 'email']));
    }
  }, [reset, userProfile]);

  if (isFetchUserInfo) {
    return <Loader variant="bars" className="text-primary" size={70} />;
  }

  return (
    <>
      {isPending && (
        <Loader variant="bars" className="text-primary" size={70} />
      )}
      <AnimateUpEffect className="rounded-box space-y-2">
        <div>
          <h2 className="font-bold text-lg">Your profile</h2>
          <p className="font-normal text-secondary text-sm ">
            Update your profile setting here ...
          </p>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="sm:flex gap-2">
            <div className="w-full">
              <SettingInput
                {...register('firstName')}
                lable="Name"
                type="text"
                placeHolder="first name"
              />
              <ZodErrors error={filedInvalidMessage?.firstName} />
            </div>
            <div className="w-full">
              <SettingInput
                {...register('lastName')}
                lable="Last name"
                type="text"
                placeHolder="last name"
              />
              <ZodErrors error={filedInvalidMessage?.lastName} />
            </div>
          </div>
          <div className="sm:flex gap-2">
            <div className="w-full">
              <SettingInput
                {...register('phone')}
                lable="Phone number"
                type="text"
                placeHolder="0956411461"
              />
              <ZodErrors error={filedInvalidMessage?.phone} />
            </div>
          </div>
          <div className="sm:flex gap-2">
            <div className="w-full">
              <SettingInput
                {...register('birthDate')}
                lable="birthdate"
                type="date"
                placeHolder="date"
              />
              <ZodErrors error={filedInvalidMessage?.birthDate} />
            </div>
            <div className="w-full">
              <SettingInput
                {...register('personalId')}
                lable="Personal id"
                type="text"
                placeHolder="02210221"
              />
              <ZodErrors error={filedInvalidMessage?.personalId} />
            </div>
          </div>
          <Selector
            lable="Gender"
            options={['female', 'male']}
            {...register('gender')}
          />
          <ZodErrors error={filedInvalidMessage?.gender} />
          {/* <HasPermission allowedTo={['patient']}>
          <NotifySetting {...register('notificationMe')} />
          <ZodErrors error={filedInvalidMessage?.notificationMe} />
        </HasPermission> */}
          <AnimateButton className="btn-rounded bg-primary text-white" enabled={isPending}>
            Apply
          </AnimateButton>
        </form>
      </AnimateUpEffect>
    </>
  );
}
