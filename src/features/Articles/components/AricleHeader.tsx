import HasPermission from '@/context/auth/HasPermission';
import NewArticle from '@/features/Doctor_Features/Models/NewArticle.Model';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { useSearchParams } from 'react-router';

export default function AricleHeader() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter');

  return (
    <AnimateDownEffect className="sub-header flex justify-between">
      <h2 className=" dark:bg-black dark:text-white font-bold">
        <span className="text-primary">50</span> Articles
      </h2>
      <div className="flex gap-2">
        <HasPermission allowedTo={['doctor']}>
          <NewArticle />
        </HasPermission>
        <select
          onChange={(e) =>
            setSearchParams(
              e.target.value == 'all' ? {} : { filter: e.target.value },
            )
          }
          className="px-2 pr-8 py-0.5 text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit "
        >
          <option value="all">All</option>
          <option value="a">a</option>
        </select>
      </div>
    </AnimateDownEffect>
  );
}
