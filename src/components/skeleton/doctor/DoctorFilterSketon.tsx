import { Skeleton } from '@/components/ui/skeleton';

export default function DoctorFilterSketon() {
  return (
    <div className="">
      <Skeleton className="w-[40%] h-[2rem]  rounded-md mb-7" />
      <div className="space-y-2 mb-5">
        <Skeleton className="w-[30%] h-[1.5rem]  rounded-md" />
        <Skeleton className="w-full  h-[1.5rem]  rounded-md" />
      </div>
      <div className="space-y-2 mb-5">
        <Skeleton className="w-[30%] h-[1.5rem]  rounded-md" />
        <Skeleton className="w-full  h-[1.5rem]  rounded-md" />
      </div>
      <div className="space-y-2 mb-5">
        <Skeleton className="w-[30%] h-[1.5rem]  rounded-md" />
        <Skeleton className="w-full  h-[1.5rem]  rounded-md" />
      </div>
      <div className="space-y-2 mb-5">
        <Skeleton className="w-[30%] h-[1.5rem]  rounded-md" />
        <Skeleton className="w-full  h-[1.5rem]  rounded-md" />
      </div>
      <div className="space-y-2 mb-5">
        <Skeleton className="w-[30%] h-[1.5rem]  rounded-md" />
        <Skeleton className="w-full  h-[1.5rem]  rounded-md" />
      </div>
    </div>
  );
}
