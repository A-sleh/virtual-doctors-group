import { paths } from '@/config/paths';
import { Link } from 'react-router';
import { LiaSearchSolid } from "react-icons/lia";
import NewArticle from '../../Models/NewArticle.Model';

export default function FastLinks() {
  return (
    <div className='flex gap-3'>
      <NewArticle />
      <Link
        to={paths.app.searchingDoctor.getHref()}
        className="flex flex-1 items-center justify-between gap-4 px-2 cursor-pointer text-lg bg-primary rounded-sm text-white font-normal outline-none h-fit"
      >
        Searching on a doctor
        <LiaSearchSolid size={23} />
      </Link>
    </div>
  );
}
