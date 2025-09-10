import SettingInput from '@/components/ui/inputs/SettingInput';
import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';

import { SubmitHandler, useForm } from 'react-hook-form';
import ZodErrors from '@/components/custom/ZodErrors';
import { useParams } from 'react-router';
import {
  useAddNewWorkHours,
  WroktimeBodyReq,
} from '../api/create-profile-info';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

export default function NewDurationsTimesFrom({selectedDay}:{selectedDay: string}) {
  const { clinicId } = useParams();
  const queryClient = useQueryClient();
  const { addNewWorkHours } = useAddNewWorkHours();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WroktimeBodyReq>();

  const onSubmit: SubmitHandler<WroktimeBodyReq> = (data,e) => {
    e?.preventDefault()

    addNewWorkHours(
      { ...data, clinicId: Number(clinicId),day: selectedDay },
      {
        onSuccess: () => {
          reset();
          queryClient.invalidateQueries({
            queryKey: [QYERY_KEYS.doctor.clinicTimes],
          });
        },
      },
    );
  };

  return (
    <HasPermission allowedTo={['doctor']}>
      <AnimateUpEffect className="rounded-box space-y-2 flex-3 h-fit rounded-tl-none rounded-tr-none">
        <h5 className="text-secondary font-medium mb-1">
          Day hours New durations
        </h5>
        <form
          className=" space-y-2 items-center "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-2">
            <div className="w-full">
              <SettingInput
                type="text"
                lable="From"
                {...register('startWorkHours', {
                  required: 'Please enter the start work hours',
                  pattern: {
                    value: /[0-9][0-9]:[0-9][0-9]/gi,
                    message: 'The pattern most be like 00:00',
                  },
                })}
              />
              <ZodErrors
                error={
                  errors?.startWorkHours?.message
                    ? [errors?.startWorkHours?.message?.toString()]
                    : undefined
                }
              />
            </div>
            <div className="w-full">
              <SettingInput
                type="text"
                lable="To"
                {...register('endWorkHours', {
                  required: 'Please enter the end work hours',
                  pattern: {
                    value: /[0-9][0-9]:[0-9][0-9]/gi,
                    message: 'The pattern most be like 00:00',
                  },
                })}
              />
              <ZodErrors
                error={
                  errors?.endWorkHours?.message
                    ? [errors?.endWorkHours?.message?.toString()]
                    : undefined
                }
              />
            </div>
          </div>
          <div className="flex gap-2">
            
            <AnimateButton
              scale={0.9}
              type="submit"
              className="btn-rounded text-white bg-fourth border-1 flex-1"
            >
              Add
            </AnimateButton>
          </div>
        </form>
      </AnimateUpEffect>
    </HasPermission>
  );
}
