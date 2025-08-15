import { Skeleton } from '@/components/ui/skeleton';

export default function ClinicsSkeletion({
  repateNumber,
}: {
  repateNumber: number;
}) {
  return Array.from({ length: repateNumber }, (_, index) => {
    return (
      <div className="p-2 rounded-box relative space-y-3" key={index}>
        <Skeleton className="w-full h-[10rem]  rounded-md" />
        <div className="flex justify-between">
          <Skeleton className="w-[30%] h-[1.5rem]  rounded-md" />
          <Skeleton className="w-[30%]  h-[1.5rem]  rounded-md" />
        </div>

        <div className="flex gap-2">
          <Skeleton className="w-[50%] h-[2rem]  rounded-md" />
          <Skeleton className="w-[50%]  h-[2rem]  rounded-md" />
        </div>
      </div>
    );
  });
}
