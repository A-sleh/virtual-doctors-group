import Selector from '@/components/ui/inputs/Selector';
import SettingInput from '@/components/ui/inputs/SettingInput';
import NotifySetting from './components/NotifySetting';

export default function Account() {
  return (
    <section className="rounded-box space-y-2">
      <div>
        <h2 className="font-bold text-lg">Your profile</h2>
        <p className="font-normal text-secondary text-sm ">
          Update your profile setting here ...
        </p>
      </div>
      <form className='space-y-3'>
        <div className="flex gap-2">
          <SettingInput lable="Name" type="text" placeHolder="Abdulfatah" />
          <SettingInput
            lable="Phone number"
            type="text"
            placeHolder="0956411461"
          />
        </div>
        <div className="flex gap-2">
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
        <Selector lable="Gender" options={['famale','male']}/>
        <NotifySetting />
        <input type="submit" value="Apply" className='btn-rounded bg-primary text-white '/>
      </form>
    </section>
  );
}
