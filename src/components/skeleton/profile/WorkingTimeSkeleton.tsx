import { Skeleton } from '@/components/ui/skeleton';

export default function WorkingTimeSkeleton() {
  return (
    <div className="flex-3 space-y-2 rounded-box">
      <Skeleton className="w-[15rem] h-[1.8rem] rounded-2xl" />
      <div className="space-y-3 m-6 w-full">
        <Skeleton className="w-[8rem] h-[1.5rem] rounded-2xl" />
        <div className="flex gap-3">
          <Skeleton className="w-[3.5rem] h-[2rem] rounded-md" />
          <Skeleton className="w-[3.5rem] h-[2rem] rounded-md" />
          <Skeleton className="w-[3.5rem] h-[2rem] rounded-md" />
          <Skeleton className="w-[3.5rem] h-[2rem] rounded-md" />
        </div>

        <Skeleton className="w-[8rem] h-[1.5rem] rounded-2xl" />
        <div className="flex gap-3">
          <Skeleton className="w-[9.5rem] h-[2rem] rounded-md" />
          <Skeleton className="w-[9.5rem] h-[2rem] rounded-md" />
          <Skeleton className="w-[9.5rem] h-[2rem] rounded-md" />
        </div>
      </div>
    </div>
  );
}
