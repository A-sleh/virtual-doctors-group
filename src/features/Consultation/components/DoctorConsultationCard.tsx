import DoctorBox from '@/features/Doctors/components/DoctorBox';

export type doctor = {
  specility: string;
  name: string;
};

export type consultaionContent = {
  description: string;
  date: string;
  status: string;
} & doctor;

export default function DoctorConsultationCard({ doctor }: consultaionContent) {
  const { status } = doctor;

  return (
    <DoctorBox doctor={doctor}>
      <div className="flex gap-2.5">
        <button className="btn-rounded bg-primary hover:bg-primary-hover text-white transition-all duration-300 ">
          Open chat
        </button>
        {status === 'pending' && (
          <button className="btn-rounded bg-white text-danger border-1 transition-all duration-300 border-danger hover:bg-danger hover:text-white">
            Cancel
          </button>
        )}
      </div>
    </DoctorBox>
  );
}
