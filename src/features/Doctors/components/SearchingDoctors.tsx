import AnimateFromToRight, {
  AnimateFromToRightInView,
} from '@/lib/Animation/AnimateFromLeftToRight';

import { Spinner } from '@/components/ui/shadcn-io/spinner';
import SearchingDoctorsSkeleton from '@/components/skeleton/doctor/SearchingDoctorsSkeleton';
import DoctorDetails from './DoctorDetails';

import { userDoctorsFilter } from '@/context/doctor/DoctorsFilterProvider';
import { IDoctorInfo, useInfiniteDoctors } from '../api/get-doctor';

export default function SearchingDoctors() {
  const { filters } = userDoctorsFilter();
  const { isLoading, data, hasNextPage, fetchNextPage,isFetchingNextPage } =
    useInfiniteDoctors(filters);

  const doctors: IDoctorInfo[] = data?.pages?.flatMap((page: any) => page.data) as IDoctorInfo[];

  console.log(doctors)
  if (isLoading) {
    return <SearchingDoctorsSkeleton repeate={3} />;
  }

  return (
    <section className="w-full rounded-md space-y-3 h-full overflow-hidden">
      <AnimateFromToRight>
        <header className="sub-header">
          <span className="text-primary">{doctors?.length || 0}</span> Doctors
          Available
        </header>
      </AnimateFromToRight>
      <div className="flex flex-col gap-2 overflow-y-auto h-full pb-20 ">
        {doctors?.map((doctor, index: number) => {
          return (
            <AnimateFromToRightInView
              duration={index < 3 ? index / 2 : 0.4}
              key={doctor.doctorId}
            >
              <DoctorDetails doctor={doctor} />
            </AnimateFromToRightInView>
          );
        })}
        { hasNextPage && (
          <div className="flex items-center justify-center py-4 text-primary underline cursor-pointer">
            <button onClick={() => fetchNextPage?.()}  className='cursor-pointer'>
              {isFetchingNextPage ? (
                <Spinner />
              ) : (
                'Load More Doctors'
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
