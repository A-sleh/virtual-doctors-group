import DoctorBox from '@/features/Consultation/components/DoctorBox';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { consultaionContentProps } from '../types/consultaion';
import RenderButtons from './ConsultationButtons';

import { Link } from 'react-router';
import { paths } from '@/config/paths';
import { useAuth } from '@/context/auth/AuthProvider';

export default function DoctorConsultationCard({
  doctor,
}: consultaionContentProps) {
  const { status } = doctor;
  const { ROLE } = useAuth();
  function renderOpenChatButton(status: string): boolean {
    return status !== 'pending' || (status == 'pending' && ROLE == 'patient');
  }

  return (
    <DoctorBox doctor={doctor}>
      <div className="flex gap-2.5">
        {renderOpenChatButton(status || '') && (
          <AnimateButton
            scale={0.7}
            className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-100 "
          >
            <Link to={paths.app.consultaionChat.getHref(1, 1)}>Open chat</Link>
          </AnimateButton>
        )}
        <RenderButtons status={status || ''} />
      </div>
    </DoctorBox>
  );
}
