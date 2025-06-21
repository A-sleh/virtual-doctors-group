import SettingInput from '@/components/ui/inputs/SettingInput';

export default function DoctorSetting() {
  return (
    <section className="rounded-box space-y-2">
      <div>
        <h2 className="font-bold text-lg">Doctor Subscription form</h2>
        <p className="font-normal text-gray-500 text-sm ">
          Make sure to add your personal identity nuimber and your phone number
          before submiting this form
        </p>
      </div>
      <form className="space-y-3">
        <SettingInput lable="syndicate id" type="text" placeHolder="10123123" />
        <SettingInput
          lable="personal identity iamge"
          type="file"
          placeHolder="your image ..."
        />
        <input type="submit" value="Apply" className='btn-rounded float-end bg-[#1579e5] text-white'/>
      </form>
    </section>
  );
}
