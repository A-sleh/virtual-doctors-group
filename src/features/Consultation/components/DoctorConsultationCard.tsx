import DoctorBox from '@/features/Consultation/components/DoctorBox';
import AnimateButton from '@/lib/Animation/AnimateButton';
import RenderButtons from './ConsultationButtons';

import { Link } from 'react-router';
import { paths } from '@/config/paths';
import { useAuth } from '@/context/auth/AuthProvider';
import { IGetConsultaionsResponse } from '../api/get-consultaion';
import { formatDateMonthYearDay } from '@/utils';
import { consultaionContent } from '../types/consultaion';

export default function DoctorConsultationCard({
  consultaion,
}: {
  consultaion: IGetConsultaionsResponse;
}) {
  const { ROLE } = useAuth();
  const {
    status,
    id: consultaionId,
    text,
    doctorId,
    userName,
    openDate,
    doctorName,
    specility,
  } = consultaion;
  const doctor: consultaionContent = {
    name: userName || doctorName,
    specility: specility ? specility : undefined,
    description: text ? text : 'Please help me for test case',
    date: formatDateMonthYearDay(openDate),
    status: status,
  };

  function renderOpenChatButton(status: string): boolean {
    return status !== 'Pending' || (status == 'Pending' && ROLE == 'patient');
  }

  return (
    <DoctorBox doctor={doctor}>
      <div className="flex gap-2.5">
        {renderOpenChatButton(status || '') && (
          <AnimateButton
            scale={0.7}
            className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-100 "
          >
            <Link
              to={paths.app.consultaionChat.getHref(consultaionId, doctorId)}
            >
              Open chat
            </Link>
          </AnimateButton>
        )}
        <RenderButtons status={status || ''} consultId={consultaionId} />
      </div>
    </DoctorBox>
  );
}
