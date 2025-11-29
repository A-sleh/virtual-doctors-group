import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  doctorSettingFormIsNotValid,
  doctorSettingInputs,
  doctorSettingInputsErrorMessages,
} from './api/create-promotion';

import SettingInput from '@/components/ui/inputs/SettingInput';
import Selector from '@/components/ui/inputs/Selector.tsx';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import ZodErrors from '@/components/custom/ZodErrors.tsx';
import Loader from '@/components/ui/loader/Loader.tsx';

import { isPatient } from '@/lib/auth.tsx';
import { useAuth } from '@/context/auth/AuthProvider.tsx';
import { useGetAllSppecialities } from '../Doctors/api/get-doctor.ts';
import { useJoinAsDoctor } from './api/create-promotion.ts';

export default function DoctorSetting() {
  
  const { ROLE } = useAuth();
  const [filedInvalidMessage, setFiledInvalidMessage] = useState<doctorSettingInputsErrorMessages>();
  const { register, handleSubmit, reset } = useForm<doctorSettingInputs>();
  const { isPending, joinAsDcotro } = useJoinAsDoctor();
  const { Specialities } = useGetAllSppecialities();

  const specialitesIds = new Array<number>();
  const specialitesTitle = new Array<string>();

  if (Specialities) {
    for (let i = 0; i < Specialities?.length; ++i) {
      specialitesIds.push(Specialities[i].id);
      specialitesTitle.push(Specialities[i].speciality);
    }
  }

  const onSubmit: SubmitHandler<doctorSettingInputs> = (data) => {
    let messages;
    if ((messages = doctorSettingFormIsNotValid(data))) {
      setFiledInvalidMessage(messages as doctorSettingInputsErrorMessages);
      return;
    }
    joinAsDcotro(data, {
      onSuccess: () => {
        reset();
        setFiledInvalidMessage({});
      },
    });
  };

  return (
    <>
      {isPending && (
        <Loader variant="bars" className="text-primary" size={70} />
      )}
      <AnimateUpEffect className="rounded-box space-y-2">
        <div>
          <h2 className="font-bold text-lg">
            {isPatient(ROLE)
              ? 'Doctor Subscription form'
              : 'Doctor information'}
          </h2>
          <p className="font-normal text-secondary text-sm ">
            {isPatient(ROLE)
              ? `Make sure to add your personal identity number and your phone number before submiting this form`
              : 'You can change your information after that admin accept your new information'}
          </p>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <SettingInput
              {...register('syndicateId')}
              lable="syndicate id"
              type="text"
              placeHolder="10123123"
            />
            <ZodErrors error={filedInvalidMessage?.syndicateId} />
          </div>
          <div>
            <Selector
              lable="speciality"
              options={specialitesTitle}
              anotherValues={specialitesIds}
              {...register('specialityId')}
            />
            <ZodErrors error={filedInvalidMessage?.specialityId} />
          </div>
          <SettingInput
            {...register('note')}
            lable="description"
            type="text"
            placeHolder="why you want to subscrib as a doctor"
          />
          <AnimateButton className="btn-rounded bg-primary text-white" enabled={isPending}>
            {isPatient(ROLE) ? 'Apply' : 'Send'}
          </AnimateButton>
        </form>
      </AnimateUpEffect>
    </>
  );
}
