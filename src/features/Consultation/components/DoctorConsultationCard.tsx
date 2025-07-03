import DoctorBox from '@/features/Consultation/components/DoctorBox';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { consultaionContentProps } from '../types/consultaion';
import RenderButtons from './ConsultationButtons';
import { ROLE } from '@/config/app.config';


export default function DoctorConsultationCard({
  doctor,
}: consultaionContentProps) {
  const { status } = doctor;

  function renderOpenChatButton(status: string) : boolean{
    return status !== 'pending' || (status == 'pending' && ROLE == 'patient')
  }

  return (
    <DoctorBox doctor={doctor}>
      <div className="flex gap-2.5">
        { renderOpenChatButton(status || '') && (
          <AnimateButton
            scale={0.7}
            className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-100 "
          >
            Open chat
          </AnimateButton>
        )}
        <RenderButtons status={status || ''} />
      </div>
    </DoctorBox>
  );
}
