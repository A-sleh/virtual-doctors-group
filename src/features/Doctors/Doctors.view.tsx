import Search from '@/components/ui/inputs/Search';
import Filters from './components/Filters';
import SearchingDoctors from './components/SearchingDoctors';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';
import { DoctorsFilterProvider } from '@/context/doctor/DoctorsFilterProvider';

export default function Doctors() {
  return (
    <DoctorsFilterProvider>
      <section className="space-y-2 overflow-hidden">
        <AnimateDownEffect>
          <form className="sub-header" >
            <Search placeHolder="Doctor name ..." />
          </form>
        </AnimateDownEffect>
        <div className="flex flex-col lg:flex-row gap-2 h-[90vh] overflow-hidden">
          <Filters />
          <SearchingDoctors />
        </div>
      </section>
    </DoctorsFilterProvider>
  );
}
