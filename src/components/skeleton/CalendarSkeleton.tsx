import { Skeleton } from '../ui/skeleton';

export default function CalendarSkeleton({ repeate }: { repeate: number }) {
  return Array.from({ length: repeate }, (_, index) => {
    return <Skeleton key={index} className="w-full h-[10rem] rounded-xl" />;
  });
}
