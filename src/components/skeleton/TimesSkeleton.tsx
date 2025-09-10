import { Skeleton } from '../ui/skeleton';

export default function TimesSkeleton() {
  return (
    <div className="flex gap-2 overflow-auto">
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
      <Skeleton className="w-[3rem] h-[2rem] rounded-md" />
    </div>
  );
}
