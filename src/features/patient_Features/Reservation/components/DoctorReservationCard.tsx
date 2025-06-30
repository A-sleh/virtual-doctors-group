import DoctorBox from '@/features/Consultation/components/DoctorBox';
import AnimateButton from '@/lib/Animation/AnimateButton';

export default function DoctorReservationCard({ doctor }) {
  return (
    <DoctorBox doctor={doctor}>
      <div className='flex gap-2.5'>
        <AnimateButton scale={0.6} className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-100 ">
          Reschedule
        </AnimateButton>
        <AnimateButton scale={0.6} className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white">
          Cancel
        </AnimateButton>
      </div>
      <h4 className='rounded-tl-md rounded-br-md text-lg bg-primary px-4 py-0.5 text-white  h-fit'>24:10:40</h4>
    </DoctorBox>
  );
}
