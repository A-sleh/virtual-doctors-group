import Search from '@/components/ui/inputs/Search';
import Filters from './components/Filters';
import SearchingDoctors from './components/SearchingDoctors';

export default function Doctors() {
  return (
    <section className="space-y-2">
      <form className="sub-header ">
        <Search placeHolder="Doctor name ..." />
      </form>
      <div className="flex flex-col lg:flex-row gap-2 h-[90vh] ">
        <Filters />
        <SearchingDoctors />
      </div>
    </section>
  );
}
