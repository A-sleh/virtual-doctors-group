import DoctorBox from '@/features/Doctors/components/DoctorBox';

export default function DoctorReservationCard({ doctor }) {
  return (
    <DoctorBox doctor={doctor}>
      <div className='flex gap-2.5'>
        <button className="btn-rounded bg-[#1579e5] hover:bg-[#157ae59a] text-white transition-all duration-300 ">
          Reschedule
        </button>
        <button className="btn-rounded bg-white text-red-600 border-1 transition-all duration-300 border-red-600 hover:bg-red-600 hover:text-white">
          Cancel
        </button>
      </div>
      <h4 className='rounded-tl-md rounded-br-md text-lg bg-[#1579e5] px-4 py-0.5 text-white  h-fit'>24:10:40</h4>
    </DoctorBox>
  );
}
