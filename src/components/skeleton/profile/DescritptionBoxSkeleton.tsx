import { Skeleton } from '@/components/ui/skeleton';

export default function DescritptionBoxSkeleton() {
  return (
    <div className="rounded-box ">
      <Skeleton className="w-[15rem] h-[2.5rem] rounded-2xl" />
      <div className="space-y-3 m-6 w-full">
        <Skeleton className="w-full h-[1.5rem] rounded-2xl" />
        <Skeleton className="w-full h-[1.5rem] rounded-2xl" />
        <Skeleton className="w-full h-[1.5rem] rounded-2xl" />
        <Skeleton className="w-[60%] h-[1.5rem] rounded-2xl" />
      </div>
    </div>
  );
}
