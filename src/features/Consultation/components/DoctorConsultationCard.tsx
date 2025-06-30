import DoctorBox from '@/features/Doctors/components/DoctorBox';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { consultaionContentProps } from '../types/consultaion';

export default function DoctorConsultationCard({ doctor }: consultaionContentProps) {
  const { status } = doctor;

  return (
    <DoctorBox doctor={doctor}>
      <div className="flex gap-2.5">
        <AnimateButton
          scale={0.7}
          className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-100 "
        >
          Open chat
        </AnimateButton>
        {status === 'pending' && (
          <AnimateButton
            scale={0.7}
            className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
          >
            Cancel
          </AnimateButton>
        )}
      </div>
    </DoctorBox>
  );
}
