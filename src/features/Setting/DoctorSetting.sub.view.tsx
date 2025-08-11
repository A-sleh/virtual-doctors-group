import { useForm, SubmitHandler } from 'react-hook-form';
import { doctorSettingInputs } from './api/updata-doctor-setting.ts';

import SettingInput from '@/components/ui/inputs/SettingInput';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { isPatient } from '@/lib/auth.tsx';
import { useAuth } from '@/context/auth/AuthProvider.tsx';

export default function DoctorSetting() {
  const { ROLE } = useAuth();
  const { register, handleSubmit } = useForm<doctorSettingInputs>();

  const onSubmit: SubmitHandler<doctorSettingInputs> = (data) => {
    console.log(data);
  };

  return (
    <AnimateUpEffect className="rounded-box space-y-2">
      <div>
        <h2 className="font-bold text-lg">
          {isPatient(ROLE) ? 'Doctor Subscription form' : 'Doctor information'}
        </h2>
        <p className="font-normal text-secondary text-sm ">
          {isPatient(ROLE)
            ? `Make sure to add your personal identity nuimber and your phone number before submiting this form`
            : 'You can change your information after that admin accept your new information'}
        </p>
      </div>
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <SettingInput
          {...register('syndicateId')}
          lable="syndicate id"
          type="text"
          placeHolder="10123123"
        />
        <AnimateButton className="btn-rounded bg-primary text-white ">
          {isPatient(ROLE) ? 'Apply' : 'Send'}
        </AnimateButton>
      </form>
    </AnimateUpEffect>
  );
}
