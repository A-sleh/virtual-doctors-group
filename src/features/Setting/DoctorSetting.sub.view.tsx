import SettingInput from '@/components/ui/inputs/SettingInput';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';

export default function DoctorSetting() {
  return (
    <AnimateUpEffect className="rounded-box space-y-2">
      <div>
        <h2 className="font-bold text-lg">Doctor Subscription form</h2>
        <p className="font-normal text-secondary text-sm ">
          Make sure to add your personal identity nuimber and your phone number
          before submiting this form
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
          Apply
        </AnimateButton>
      </form>
    </AnimateUpEffect>
  );
}
