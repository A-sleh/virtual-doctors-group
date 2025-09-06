import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

import ZodErrors from '@/components/custom/ZodErrors';
import DoctorInfoHeader from './components/DoctorInfoHeader';
import Model from '@/components/models/Model';
import PaymentForm from './components/PaymentForm';
import MainInput from '@/components/ui/inputs/MainInput';

import {
  consultaionFormIsNotValid,
  consultaionInput,
  consultaionInputErrorMessage,
  useCreateNewConsultaion,
} from '@/features/Consultation/api/create-consultaion';
import { useAuth } from '@/context/auth/AuthProvider';
import Loader from '@/components/ui/loader/Loader';
import { successToast } from '@/components/custom/toast';

export default function ConsultADoctor({
  doctorId,
  cost,
  doctor,
}: {
  doctorId: number;
  cost: number;
  doctor: {
    name: string;
    location: string;
    specility: string;
  };
}) {
  const [nextStep, setNextStep] = useState<boolean>(false);
  const { register, handleSubmit,reset } = useForm<consultaionInput>();

  const { createNewConsultaion, isPending } = useCreateNewConsultaion();
  const { userId } = useAuth();
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<consultaionInputErrorMessage>();

  const onSubmit: SubmitHandler<consultaionInput> = (
    data: consultaionInput,
  ) => {
    let errorsMessages;
    if ((errorsMessages = consultaionFormIsNotValid(data))) {
      setFiledInvalidMessage(errorsMessages as consultaionInputErrorMessage);
      if (!nextStep && filedInvalidMessage?.message == undefined) {
        setNextStep(true);
        setFiledInvalidMessage({});
      }
      return;
    }

    createNewConsultaion({ doctorId, text: data.message, userId },{
      onSuccess: () => {
        successToast(`It was deducted ${cost} from your balance`)
        setNextStep(false)
        reset()
      }
    });
  };

  return (
    <>
      {isPending && (
        <Loader variant="bars" className="text-primary" size={80} />
      )}

      <Model>
        <Model.Open opens="consult-doctor">
          <AnimateButton className="btn-rounded pr-1 flex gap-x-3 items-center bg-white text-primary border-1 transition-all duration-100 border-primary hover:bg-primary hover:text-white">
            Consult now
            <MdKeyboardDoubleArrowRight className="" />
          </AnimateButton>
        </Model.Open>
        <Model.Window name="consult-doctor" title="Consult a doctor">
          <AnimateFromToRight className="space-y-2">
            <DoctorInfoHeader
              specility={doctor?.specility}
              name={doctor?.name}
              location={doctor?.location}
            >
              <span className="font-light px-2 h-fit bg-danger text-white rounded-tl-sm rounded-br-sm text-nowrap">
                {cost === 0 ? 'Free' : `${cost}$`}
              </span>
            </DoctorInfoHeader>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
              {!nextStep ? (
                <div className="rounded-box">
                  <h4 className="sub-header text-lg flex justify-between items-center gap-3 text-secondary font-medium mb-2">
                    Consultation content
                  </h4>
                  <MainInput
                    type="text"
                    lable="Description of consultaion"
                    placeHolder="Enter your message ..."
                    {...register('message')}
                  />
                  <ZodErrors error={filedInvalidMessage?.message} />
                </div>
              ) : (
                <PaymentForm
                  register={register}
                  filedInvalidMessage={filedInvalidMessage}
                />
              )}
              <AnimateButton
                withInitialScale={true}
                className="px-4 py-1 bg-primary text-white rounded-md float-end cursor-pointer"
              >
                {!nextStep ? 'Next' : 'send'}
              </AnimateButton>
            </form>
          </AnimateFromToRight>
        </Model.Window>
      </Model>
    </>
  );
}
