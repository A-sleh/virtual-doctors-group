import DoctorBoxSkeleton from "../DoctorBoxSkeleton";


export default function TopDoctorsSkeleton() {
  return (
    <div className='md:flex gap-2 w-full '>
        <DoctorBoxSkeleton repeat={2} />
        <DoctorBoxSkeleton repeat={2} />
    </div>
  )
}
