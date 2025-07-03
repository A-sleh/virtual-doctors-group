import SettingInput from '@/components/ui/inputs/SettingInput';
import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';

export default function NewDurationsTimesFrom() {
  return (
    <HasPermission allowedTo={['doctor']}>
      <AnimateUpEffect className="rounded-box space-y-2 flex-3 h-fit rounded-tl-none rounded-tr-none">
        <h5 className="text-secondary font-medium mb-1">
          Day hours New durations
        </h5>
        <form
          className=" space-y-2 items-center "
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex gap-2">
            <SettingInput type="text" lable="From" />
            <SettingInput type="text" lable="To" />
          </div>
          <div className="flex gap-2">
            <AnimateButton className="btn-rounded text-white bg-fourth border-1 flex-1">
              Add
            </AnimateButton>
            <AnimateButton className="btn-rounded text-white bg-primary border-1  flex-2">
              Apply
            </AnimateButton>
          </div>
        </form>
      </AnimateUpEffect>
    </HasPermission>
  );
}
