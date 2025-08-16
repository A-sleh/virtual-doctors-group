import { useForm, SubmitHandler } from 'react-hook-form';
import {
  accountInputs,
  accountInputsErrorMessages,
  accountSettingFormIsNotValid,
  useUpdateAccountSetting,
} from './api/updata-account.ts';

import Selector from '@/components/ui/inputs/Selector';
import SettingInput from '@/components/ui/inputs/SettingInput';
import NotifySetting from './components/NotifySetting';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import AnimateButton from '@/lib/Animation/AnimateButton';
import HasPermission from '@/context/auth/HasPermission';
import { useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors.tsx';
import { useUserProfile } from '../auth/api/useUser.tsx';

export default function Account() {
  const { userProfile } = useUserProfile();
  const { updateAccountSetting, isPending } = useUpdateAccountSetting();
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<accountInputsErrorMessages>();
  const { register, handleSubmit } = useForm<accountInputs>({
    defaultValues: userProfile,
  });

  const onSubmit: SubmitHandler<accountInputs> = (data) => {
    let errorMessage;
    if ((errorMessage = accountSettingFormIsNotValid(data))) {
      setFiledInvalidMessage(errorMessage as accountInputsErrorMessages);
      return;
    }
    updateAccountSetting(data);
  };

  return (
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
              placeHolder="Abdulfatah"
            />
            <ZodErrors error={filedInvalidMessage?.firstName} />
          </div>
          <div className="w-full">
            <SettingInput
              {...register('lastName')}
              lable="Last name"
              type="text"
              placeHolder="Abdulfatah"
            />
            <ZodErrors error={filedInvalidMessage?.lastName} />
          </div>
        </div>
        <div className="sm:flex gap-2">
          <div className="w-full">
            <SettingInput
              {...register('email')}
              lable="Email"
              type="email"
              placeHolder="0956411461"
            />
            <ZodErrors error={filedInvalidMessage?.email} />
          </div>
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
              placeHolder="Abdulfatah"
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
          options={['famale', 'male']}
          {...register('gender')}
        />
        <ZodErrors error={filedInvalidMessage?.gender} />
        <HasPermission allowedTo={['patient']}>
          <NotifySetting {...register('notificationMe')} />
        </HasPermission>
        <AnimateButton className="btn-rounded bg-primary text-white ">
          Apply
        </AnimateButton>
      </form>
    </AnimateUpEffect>
  );
}
