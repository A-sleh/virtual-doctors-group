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
        <button className="btn-rounded bg-[#1579e5] hover:bg-[#157ae59a] text-white transition-all duration-300 ">
          Open chat
        </button>
        {status === 'pending' && (
          <button className="btn-rounded bg-white text-red-600 border-1 transition-all duration-300 border-red-600 hover:bg-red-600 hover:text-white">
            Cancel
          </button>
        )}
      </div>
    </DoctorBox>
  );
}
