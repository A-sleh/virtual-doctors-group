import { Skeleton } from '../ui/skeleton';

export default function ClinicReservationSkeleton() {
  return (
    <div className="space-y-2 bg-white p-2 rounded-md">
      <Skeleton className="w-full h-[2rem] rounded-xl" />
      <Skeleton className="w-full h-[2rem] rounded-xl" />
      <Skeleton className="w-full h-[2rem] rounded-xl" />
    </div>
  );
}
