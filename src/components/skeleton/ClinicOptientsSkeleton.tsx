import { Skeleton } from '../ui/skeleton';

export default function ClinicOptientsSkeleton() {
  return (
    <div className="space-y-2 bg-white p-2">
      <Skeleton className="w-full h-[3rem] rounded-xl" />
      <Skeleton className="w-full h-[3rem] rounded-xl" />
      <Skeleton className="w-full h-[3rem] rounded-xl" />
    </div>
  );
}
