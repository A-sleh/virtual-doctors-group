import { errorToast } from '@/components/custom/toast';
import Model from '@/components/models/Model';
import StarRating from '@/components/ui/doctor/StarRatingService';
import FilterInput from '@/components/ui/inputs/FilterInput';
import Loader from '@/components/ui/loader/Loader';
import { useAuth } from '@/context/auth/AuthProvider';
import { useRateDoctor } from '@/features/Doctor_Features/Profile/api/create-profile-info';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export default function RatingDoctor({ doctorId }: { doctorId: number }) {


  const queryClient = useQueryClient()
  const { userId } = useAuth();
  const { isPending, rateDoctor } = useRateDoctor();

  const [avgWait, setAvgWait] = useState(0);
  const [avgService, setAvgService] = useState(0);
  const [act, setAct] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!avgWait || !avgService || !act) {
      errorToast('Please fill all field');
      return;
    }

    const reqBody = {
      userId,
      doctorId,
      avgWait,
      avgService,
      act,
    };
    rateDoctor(reqBody, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QYERY_KEYS.doctor.rating]
        })
        setAvgWait(0);
        setAvgService(0);
        setAct(0);
      },
    });
  }

  if (isPending) {
    return <Loader variant="bars" className="text-primary" size={80} />;
  }

  return (
    <Model>
      <Model.Open opens="booking">
        <AnimateButton className="text-center px-2 py-1 rounded-sm text-white bg-primary my-2 cursor-pointer hover:bg-primary-hover transition-all duration-150">
          Review Doctor
        </AnimateButton>
      </Model.Open>
      <Model.Window title="Review doctor details" name="booking">
        <form onSubmit={handleSubmit} className='space-y-2'>
          <div className="rounded-box">
            <FilterInput label="Avarage of Waiting from 5 stars ">
              <StarRating size={25} onSetRating={setAvgWait} />
            </FilterInput>
          </div>
          <div className="rounded-box">
            <FilterInput label="Avarage of service from 5 stars ">
              <StarRating size={25} onSetRating={setAvgService} />
            </FilterInput>
          </div>
          <div className="rounded-box">
            <FilterInput label="Personality doctor rate">
              <StarRating size={25} onSetRating={setAct} />
            </FilterInput>
          </div>
          <AnimateButton
            withInitialScale={true}
            className="px-4 py-1 bg-primary text-white rounded-md float-end cursor-pointer"
          >
            send
          </AnimateButton>
        </form>
      </Model.Window>
    </Model>
  );
}
