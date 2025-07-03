import SettingInput from '@/components/ui/inputs/SettingInput';
import { ROLE } from '@/config/app.config';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import isPatient from '@/utils/userPermission';

export default function DoctorSetting() {
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
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <SettingInput lable="syndicate id" type="text" placeHolder="10123123" />
        <SettingInput
          lable="personal identity iamge"
          type="file"
          placeHolder="your image ..."
        />
        <AnimateButton className="btn-rounded bg-primary text-white ">
          {isPatient(ROLE) ? 'Apply' : 'Send'}
        </AnimateButton>
      </form>
    </AnimateUpEffect>
  );
}
