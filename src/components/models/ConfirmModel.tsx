import AnimateButton from '@/lib/Animation/AnimateButton';
import Model from './Model';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import AnimateScale from '@/lib/Animation/AnimateScale';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

type ConfirmModelProps = {
  children: React.ReactElement;
  openKey: string;
  description: string;
  onConfirmClick: () => void;
};

export default function ConfirmModel({
  description,
  children,
  onConfirmClick,
  openKey,
}: ConfirmModelProps) {
  return (
    <Model>
      <Model.Open opens={openKey}>{children}</Model.Open>
      <Model.Window name={openKey} className="w-fit bg-white">
        <AnimateScale className=" text-gray-600 w-full">
          <AiOutlineInfoCircle size={100} className="mx-auto" />
        </AnimateScale>
        <AnimateFromToRight>
          <p className="text-center w-[25rem] font-unset text-gray-600 my-3 px-3">
            {description}
          </p>
        </AnimateFromToRight>
        <div className="gap-2 flex justify-center ">
          <AnimateButton
            scale={0.9}
            className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-100 "
            onClick={() => onConfirmClick()}
          >
            Confirm
          </AnimateButton>
          <Model.Close>
            <AnimateButton
              scale={0.9}
              className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
            >
              Cancel
            </AnimateButton>
          </Model.Close>
        </div>
      </Model.Window>
    </Model>
  );
}
