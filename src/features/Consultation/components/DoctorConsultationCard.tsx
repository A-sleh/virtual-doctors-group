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
    doctorSpeciality,
  } = consultaion;

  const doctor: consultaionContent = {
    doctorId: doctorId,
    name: userName || doctorName,
    specility: doctorSpeciality ? doctorSpeciality : undefined,
    description: text ? text : 'Please help me for test case',
    date: formatDateMonthYearDay(openDate),
    status: status,
  };

  
  function renderOpenChatButton(status: string): boolean {
    return status !== 'Pending';
  }

  return (
    <DoctorBox doctor={doctor}>
      <div className="flex gap-2.5">
        {renderOpenChatButton(status || '') && status != 'Rejected' && (
          <AnimateButton
            scale={0.7}
            className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-100 "
          >
            <Link
              to={{
                pathname: paths.app.consultaionChat.getHref(
                  consultaionId,
                  doctorId,
                ),
                search: `userName=${userName || doctorName}&isDoctor=${!!doctorSpeciality}`,
              }}
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
