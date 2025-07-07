import Selector from '@/components/ui/inputs/Selector';
import SettingInput from '@/components/ui/inputs/SettingInput';
import NotifySetting from './components/NotifySetting';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import AnimateButton from '@/lib/Animation/AnimateButton';
import HasPermission from '@/context/auth/HasPermission';

export default function Account() {
  return (
    <AnimateUpEffect className="rounded-box space-y-2">
      <div>
        <h2 className="font-bold text-lg">Your profile</h2>
        <p className="font-normal text-secondary text-sm ">
          Update your profile setting here ...
        </p>
      </div>
      <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
        <div className="sm:flex gap-2">
          <SettingInput lable="Name" type="text" placeHolder="Abdulfatah" />
          <SettingInput
            lable="Phone number"
            type="text"
            placeHolder="0956411461"
          />
        </div>
        <div className="sm:flex gap-2">
          <SettingInput
            lable="birthdate"
            type="date"
            placeHolder="Abdulfatah"
          />
          <SettingInput
            lable="Personal id"
            type="text"
            placeHolder="02210221"
          />
        </div>
        <Selector lable="Gender" options={['famale', 'male']} />
        <HasPermission allowedTo={['patient']}>
          <NotifySetting />
        </HasPermission>
        <AnimateButton className="btn-rounded bg-primary text-white ">
          Apply
        </AnimateButton>
      </form>
    </AnimateUpEffect>
  );
}
