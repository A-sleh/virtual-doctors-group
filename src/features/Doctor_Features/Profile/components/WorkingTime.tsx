import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { workingTimeProps } from '../types/profile';
import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { RiSettings5Fill } from 'react-icons/ri';
import NewDurationsTimesFrom from './NewDurationsTimesFrom';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { IoMdClose } from 'react-icons/io';

export default function WorkingTime({
  dayHours,
  workingHours,
}: workingTimeProps) {
  const [addNewDuration, setAddNewDuration] = useState(false);

  return (
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
            {workingHours.map((hour: string) => {
              return (
                <span
                  className="px-4 py-0.5 h-fit font-medium bg-primary rounded-sm text-white"
                  key={hour}
                >
                  {hour}
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
