import Model from '@/components/models/Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import NewClinicForm from '../Profile/components/NewClinicForm';
import { VscDiffAdded } from 'react-icons/vsc';

export default function NewClinicModel() {
  return (
    <Model>
      <Model.Open opens="new-clinic">
        <AnimateButton
          scale={0.9}
          className="flex items-center flex-1 w-fit justify-between gap-4 px-2 cursor-pointer text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit "
        >
          <span>New clinic</span>
          <VscDiffAdded size={23} className="mt-0.5" />
        </AnimateButton>
      </Model.Open>
      <Model.Window
        title="Add new clinic"
        name="new-clinic"
        className="md:w-[38vw] w-[90vw] h-fit"
      >
        <NewClinicForm />
      </Model.Window>
    </Model>
  );
}
