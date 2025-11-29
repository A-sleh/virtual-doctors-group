import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import {
  supportFormIsNotValid,
  supportInput,
  supportInputErrorMessages,
  useNewSupportMessage,
} from './api/create-support-message.ts';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import ZodErrors from '@/components/custom/ZodErrors.tsx';
import Loader from '@/components/ui/loader/Loader.tsx';

export default function Support() {

  const [filedInvalidMessage, setFiledInvalidMessage] = useState<supportInputErrorMessages>();

  const { register, handleSubmit, reset } = useForm<supportInput>();
  const { isPending, sendSupportMessage } = useNewSupportMessage();
  
  const onSubmit: SubmitHandler<supportInput> = (data) => {
    let errorMessage;
    if ((errorMessage = supportFormIsNotValid(data))) {
      setFiledInvalidMessage(errorMessage as supportInputErrorMessages);
      return;
    }
    sendSupportMessage(data,{
      onSuccess: () => {
        reset()
      }
    });
  };

  return (
    <>
      {isPending && (
        <Loader variant="bars" className="text-primary" size={80} />
      )}
      <AnimateUpEffect className="flex flex-col gap-3 bg-white dark:bg-black dark:text-white rounded-lg p-4">
        <AnimateFromToRight className="text-primary font-bold text-4xl text-center mb-10">
          HI, HOW CAN WE HELPE YOU?
        </AnimateFromToRight>
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register('message')}
            placeholder="write your feedback here ..."
            className="w-full p-2 bg-[#EEEEEE] rounded-lg text- min-h-[50vh] outline-none"
          ></textarea>
          <ZodErrors error={filedInvalidMessage?.message} />
          <div className="flex gap-2 justify-end">
            <input
              type="reset"
              value="Reset"
              className="btn-rounded bg-white text-primary border-1 transition-all duration-300 border-primary hover:bg-primary hover:text-white"
            />
            <input
              type="submit"
              value="Submit"
              disabled={isPending}
              className="btn-rounded bg-primary hover:bg-[#157ae59a] text-white transition-all duration-300 border border-primary"
            />
          </div>
        </form>
      </AnimateUpEffect>
    </>
  );
}
