import { useForm, SubmitHandler } from 'react-hook-form';
import { accountInputs } from './api/updata-account.ts';

import Selector from '@/components/ui/inputs/Selector';
import SettingInput from '@/components/ui/inputs/SettingInput';
import NotifySetting from './components/NotifySetting';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import AnimateButton from '@/lib/Animation/AnimateButton';
import HasPermission from '@/context/auth/HasPermission';
import { api } from '@/lib/api-client.ts';

export default function Account() {
  const { register, handleSubmit } = useForm<accountInputs>();
  const onSubmit: SubmitHandler<accountInputs> = (data) => {};
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
          <SettingInput
            {...register('name')}
            lable="Name"
            type="text"
            placeHolder="Abdulfatah"
          />
          <SettingInput
            {...register('phoneNumber')}
            lable="Phone number"
            type="text"
            placeHolder="0956411461"
          />
        </div>
        <div className="sm:flex gap-2">
          <SettingInput
            {...register('birthDate')}
            lable="birthdate"
            type="date"
            placeHolder="Abdulfatah"
          />
          <SettingInput
            {...register('personalId')}
            lable="Personal id"
            type="text"
            placeHolder="02210221"
          />
        </div>
        <Selector
          lable="Gender"
          options={['famale', 'male']}
          {...register('gender')}
        />
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
