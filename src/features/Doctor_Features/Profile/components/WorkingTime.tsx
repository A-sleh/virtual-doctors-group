import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { workingTimeProps } from '../types/profile';
import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { RiDeleteBin6Line, RiSettings5Fill } from 'react-icons/ri';
import NewDurationsTimesFrom from './NewDurationsTimesFrom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { IoMdClose } from 'react-icons/io';
import {
  useGetClinicWorkingTimes,
  workTimeType,
} from '../api/get-profile-info';
import { useParams } from 'react-router';
import WorkingTimeSkeleton from '@/components/skeleton/profile/WorkingTimeSkeleton';
import { useDeleteWorkTime } from '../api/delete-profile-info';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import { fullNamedDays, mappingWorkTimes, removeKeys } from '@/utils';
import Loader from '@/components/ui/loader/Loader';

export default function WorkingTime() {
  const { clinicId } = useParams();
  const queryClient = useQueryClient();

  const [workingTimeMaped, setWorkingTimeMaped] = useState();
  const [selectedDay, setSelectedDay] = useState('');
  const [addNewDuration, setAddNewDuration] = useState(false);

  const { deleteWorkTime, isPending: deleteIsPending } = useDeleteWorkTime();
  const { isPending, workingTimes } = useGetClinicWorkingTimes(
    Number(clinicId),
  );

  useEffect(() => {
    if (workingTimes) {
      // Mapping the worktimes which cames from server key (day) of obj (worktime)
      mappingWorkTimes(workingTimes || []).then((data) => {
        setWorkingTimeMaped(data);
        const firstKey = data?.keys()?.next()?.value || '';
        setSelectedDay(firstKey);
      });
    }
  }, [workingTimes]);

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
    <>
      {deleteIsPending && <Loader variant="bars" className="text-primary" size={80} /> }
      <div className="flex-3 space-y-2">
        <AnimateUpEffect className="rounded-box space-y-2  h-fit">
          <h1 className="text-xl font-medium flex items-center justify-between">
            Working Time
            <HasPermission allowedTo={['doctor']}>
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
            </HasPermission>
          </h1>
          <div>
            <h5 className="text-secondary font-medium mb-1">Day hours</h5>
            <div className="flex gap-2">
              {addNewDuration
                ? fullNamedDays.map((day, index) => {
                    return (
                      <span
                        className={`px-4 py-0.5 h-fit cursor-pointer font-medium rounded-sm text-white ${
                          day == selectedDay ? 'bg-primary' : 'bg-primary-hover'
                        }`}
                        onClick={() => setSelectedDay(day)}
                        key={day}
                      >
                        {day}
                      </span>
                    );
                  })
                : fullNamedDays?.map((day) => {
                    if (!workingTimeMaped?.has(day)) return;
                    return (
                      <span
                        className={`px-4 py-0.5 h-fit font-medium cursor-pointer ${
                          day == selectedDay ? 'bg-primary' : 'bg-primary-hover'
                        } rounded-sm text-white`}
                        onClick={() => setSelectedDay(day)}
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
              {workingTimeMaped?.get(selectedDay)?.map((workTime) => {
                return (
                  <span
                    className="px-4 py-0.5 h-fit flex items-center gap-3 font-medium bg-primary rounded-sm text-white relative"
                    key={workTime.startWorkHours + workTime.clinicId}
                  >
                    From {workTime.startWorkHours} to {workTime.endWorkHours}
                    {addNewDuration && (
                      <AnimateButton withInitialScale={true}>
                        <RiDeleteBin6Line
                          onClick={() =>
                            handleDelteWorkTimeClicked(workTime.id)
                          }
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
          {addNewDuration && (
            <NewDurationsTimesFrom selectedDay={selectedDay} />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
