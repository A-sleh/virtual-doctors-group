import Model, { useCloseModelAfterAnyAction } from '@/components/models/Model';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { LuRefreshCcw } from 'react-icons/lu';
import { useGetDoctorClinics } from '../Profile/api/get-profile-info';
import { useAuth } from '@/context/auth/AuthProvider';
import { useCurrentClinic } from '@/context/doctor/CurrentClinicProvider';
import ClinicOptientsSkeleton from '@/components/skeleton/ClinicOptientsSkeleton';
import { useEffect, useState } from 'react';

export default function ChangeClinic() {
  const { userId } = useAuth();

  const [closeModel, setCloseModel] = useState(false);
  const { setClinic, clinic } = useCurrentClinic();
  const { doctorClinics, isPending } = useGetDoctorClinics(userId);

  useEffect(() => {
    // Set default value in first render if there is a clinic
    if (!clinic.id && doctorClinics && doctorClinics.length) {
      setClinic({ id: doctorClinics[0].id, name: doctorClinics[0].name });
    }
  }, [doctorClinics, setClinic]);

  async function handleChangeClinic(id: number, name: string) {
    await setClinic({ id, name });

    // closeModel
  }

  useEffect(() => {
    if (closeModel) {
      setCloseModel(false);
    }
  }, [closeModel]);

  if (closeModel) {
    return null;
  }

  return (
    <Model>
      <Model.Open opens="change-clinic">
        <LuRefreshCcw
          size={25}
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
                onClick={() => {
                  handleChangeClinic(id, name), setCloseModel(true);
                }}
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
