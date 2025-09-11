import { Skeleton } from '../ui/skeleton';

export default function DoctorBoxSkeleton({ repeat }: { repeat: number }) {
  const skeletonList = Array.from({ length: repeat }, (_) => <SkeletonBox />);
  return <>{skeletonList}</>;
}

function SkeletonBox() {
  return (
    <div className="rounded-box space-y-4">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Skeleton className="w-14 h-14 rounded-full"></Skeleton>
          <div className="space-y-2">
            <Skeleton className="w-[7rem] h-4 rounded-sm"></Skeleton>
            <Skeleton className="w-[3rem] h-4 rounded-sm"></Skeleton>
          </div>
        </div>
        <div className="flex gap-2">
          <Skeleton className="w-[5rem] h-4 rounded-sm"></Skeleton>
          <Skeleton className="w-[5rem] h-4 rounded-sm"></Skeleton>
        </div>
      </div>

      <div className="space-y-3">
        <Skeleton className="w-full h-4 rounded-sm"></Skeleton>
        <Skeleton className="w-full h-4 rounded-sm"></Skeleton>
        <Skeleton className="w-[80%] h-4 rounded-sm"></Skeleton>
      </div>
    </div>
  );
}
