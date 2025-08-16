import Model from '@/components/models/Model';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { LuRefreshCcw } from 'react-icons/lu';
import { useGetDoctorClinics } from '../Profile/api/get-profile-info';
import { useAuth } from '@/context/auth/AuthProvider';
import { useCurrentClinic } from '@/context/doctor/CurrentClinicProvider';
import ClinicOptientsSkeleton from '@/components/skeleton/ClinicOptientsSkeleton';

export default function ChangeClinic() {
  const { userId } = useAuth();
  const { setClinic, clinic } = useCurrentClinic();
  const { doctorClinics, isPending } = useGetDoctorClinics(userId);

  return (
    <Model>
      <Model.Open opens="change-clinic">
        <LuRefreshCcw
          size={33}
          className="text-secondary bg-third p-1 rounded-full hover:rotate-180 transition-all duration-300 cursor-pointer"
        />
      </Model.Open>
      <Model.Window title="Available clinic" name="change-clinic">
        <div className="space-y-1">
          {isPending ? (
            <ClinicOptientsSkeleton />
          ) : (
            doctorClinics?.map(({ id, name }, index: number) => (
              <AnimateFromToRight
                duration={index / 3}
                onClick={() => setClinic({ id, name })}
                className={`cursor-pointer hover:bg-primary hover:text-white transition-all duration-150 p-2 rounded-sm font-medium ${
                  clinic.id == id
                    ? 'bg-primary text-white'
                    : 'bg-white text-secondary'
                }`}
              >
                {name}
              </AnimateFromToRight>
            ))
          )}
        </div>
      </Model.Window>
    </Model>
  );
}
