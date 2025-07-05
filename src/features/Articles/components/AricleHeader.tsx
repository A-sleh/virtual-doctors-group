import HasPermission from '@/context/auth/HasPermission';
import NewArticle from '@/features/Doctor_Features/Models/NewArticle.Model';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';

export default function AricleHeader() {
  return (
    <AnimateDownEffect className="sub-header flex justify-between">
      <h2 className=" dark:bg-black dark:text-white font-bold">
        <span className="text-primary">50</span> Articles
      </h2>
      <div className="flex gap-2">
        <HasPermission allowedTo={['doctor']}>
          <NewArticle />
        </HasPermission>
        <select className="px-2 pr-8 py-0.5 text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit ">
          <option value="All">All</option>
        </select>
      </div>
    </AnimateDownEffect>
  );
}
