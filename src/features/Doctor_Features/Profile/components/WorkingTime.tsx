import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { workingTimeProps } from '../types/profile';
import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { RiDeleteBin6Line, RiSettings5Fill } from 'react-icons/ri';
import NewDurationsTimesFrom from './NewDurationsTimesFrom';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { IoMdClose } from 'react-icons/io';
import { useGetClinicWorkingTimes } from '../api/get-profile-info';
import { useParams } from 'react-router';
import WorkingTimeSkeleton from '@/components/skeleton/profile/WorkingTimeSkeleton';
import { useDeleteWorkTime } from '../api/delete-profile-info';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

export default function WorkingTime({ dayHours }: workingTimeProps) {
  const { clinicId } = useParams();
  const queryClient = useQueryClient();
  const [addNewDuration, setAddNewDuration] = useState(false);
  const { deleteWorkTime, isPending: deleteIsPending } = useDeleteWorkTime();
  const { isPending, workingTimes } = useGetClinicWorkingTimes(
    Number(clinicId),
  );

  function handleDelteWorkTimeClicked(workTimeId: number) {
    deleteWorkTime(workTimeId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QYERY_KEYS.doctor.clinicTimes],
        });
      },
    });
  }

  return isPending ? (
    <WorkingTimeSkeleton />
  ) : (
    <div className="flex-3 space-y-2">
      <AnimateUpEffect className="rounded-box space-y-2  h-fit">
        <h1 className="text-xl font-medium flex items-center justify-between">
          Working Time
          <HasPermission allowedTo={['doctor']}>
            <AnimateButton withInitialScale={true}>
              {!addNewDuration ? (
                <RiSettings5Fill
                  size={25}
                  className="text-primary cursor-pointer"
                  onClick={() => setAddNewDuration(true)}
                />
              ) : (
                <IoMdClose
                  size={25}
                  className="text-danger cursor-pointer"
                  onClick={() => setAddNewDuration(false)}
                />
              )}
            </AnimateButton>
          </HasPermission>
        </h1>
        <div>
          <h5 className="text-secondary font-medium mb-1">Day hours</h5>
          <div className="flex gap-2">
            {dayHours.map((day: string) => {
              return (
                <span
                  className="px-4 py-0.5 h-fit font-medium bg-primary rounded-sm text-white"
                  key={day}
                >
                  {day}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h5 className="text-secondary font-medium mb-1">Working hous</h5>
          <div className="flex gap-2">
            {workingTimes?.map((workTime) => {
              return (
                <span
                  className="px-4 py-0.5 h-fit flex items-center gap-3 font-medium bg-primary rounded-sm text-white relative"
                  key={workTime.startWorkHours + workTime.clinicId}
                >
                  From {workTime.startWorkHours} to {workTime.endWorkHours}
                  {addNewDuration && (
                    <AnimateButton withInitialScale={true}>
                      <RiDeleteBin6Line
                        onClick={() => handleDelteWorkTimeClicked(workTime.id)}
                        size={20}
                        className="text-white cursor-pointer hover:text-danger transition-all"
                      />
                    </AnimateButton>
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </AnimateUpEffect>
      <AnimatePresence>
        {addNewDuration && <NewDurationsTimesFrom />}
      </AnimatePresence>
    </div>
  );
}
