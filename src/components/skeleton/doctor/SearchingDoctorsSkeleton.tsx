import { Skeleton } from '@/components/ui/skeleton';
import DoctorBoxSkeleton from '../DoctorBoxSkeleton';

export default function SearchingDoctorsSkeleton({
  repeate,
}: {
  repeate: number;
}) {
  return (
    <div className="w-full">
      <header className="sub-header h-[2.5rem] flex mb-3">
        <Skeleton className="w-[5%] h-full rounded-md mr-2" />
        <Skeleton className="w-[20%] h-full  rounded-md" />
      </header>
      <DoctorBoxSkeleton repeat={repeate} />
    </div>
  );
}
