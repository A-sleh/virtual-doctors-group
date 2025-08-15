import { Skeleton } from '@/components/ui/skeleton';

export default function ProfileHeaderSkeleton() {
  return (
    <div className="rounded-box flex  justify-between">
      <div className="flex gap-2">
        <Skeleton className="w-[12rem] h-[12rem] rounded-full" />
        <div className="space-y-2">
          <Skeleton className="w-[10rem] h-[2rem] rounded-xl" />
          <Skeleton className="w-[5rem] h-[1.4rem] rounded-xl" />
          <Skeleton className="w-[9rem] h-[1rem] rounded-xl" />
        </div>
      </div>
      <div className="w-[30%] space-y-3">
        <Skeleton className="w-full h-[3.2rem] rounded-xl" />
        <Skeleton className="w-full h-[3.2rem] rounded-xl" />
        <Skeleton className="w-full h-[3.2rem] rounded-xl" />
      </div>
    </div>
  );
}
