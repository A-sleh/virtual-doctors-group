import { Skeleton } from '../ui/skeleton';

export default function ConsultaionHeaderSkeleton() {
  return (
    <div className="grid grid-cols-3 bg-white p-2 rounded-xl gap-2 dark:bg-black overflow-hidden">
      <Skeleton className="w-full h-[6rem] rounded-xl" />
      <Skeleton className="w-full h-[6rem] rounded-xl" />
      <Skeleton className="w-full h-[6rem] rounded-xl" />
    </div>
  );
}
