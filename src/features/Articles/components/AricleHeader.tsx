import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { VscDiffAdded } from "react-icons/vsc";

export default function AricleHeader() {
  return (
    <AnimateDownEffect className="sub-header flex justify-between">
      <h2 className=" dark:bg-black dark:text-white font-bold">
        <span className="text-primary">50</span> Articles
      </h2>
      <div className="flex gap-2">
        <HasPermission allowedTo={['doctor']}>
          <AnimateButton scale={0.9} className="flex items-center justify-center gap-4 px-2 cursor-pointer text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit ">
            <span>New article</span>
            <VscDiffAdded size={23} className='mt-0.5'/>
          </AnimateButton>
        </HasPermission>
        <select className="px-2 pr-8 py-0.5 text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit ">
          <option value="All">All</option>
        </select>
      </div>
    </AnimateDownEffect>
  );
}
