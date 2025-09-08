import { useForm, SubmitHandler } from 'react-hook-form';
import {
  doctorSettingFormIsNotValid,
  doctorSettingInputs,
  doctorSettingInputsErrorMessages,
} from './api/updata-doctor-setting.ts';

import SettingInput from '@/components/ui/inputs/SettingInput';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { isPatient } from '@/lib/auth.tsx';
import { useAuth } from '@/context/auth/AuthProvider.tsx';
import Selector from '@/components/ui/inputs/Selector.tsx';
import { useGetAllSppecialities } from '../Doctors/api/get-doctor.ts';
import { useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors.tsx';

export default function DoctorSetting() {
  const { ROLE } = useAuth();
  const { register, handleSubmit } = useForm<doctorSettingInputs>();
  const { Specialities } = useGetAllSppecialities();
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<doctorSettingInputsErrorMessages>();

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
  };

  return (
    <AnimateUpEffect className="rounded-box space-y-2">
      <div>
        <h2 className="font-bold text-lg">
          {isPatient(ROLE) ? 'Doctor Subscription form' : 'Doctor information'}
        </h2>
        <p className="font-normal text-secondary text-sm ">
          {isPatient(ROLE)
            ? `Make sure to add your personal identity nuimber and your phone number before submiting this form`
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
          <ZodErrors error={filedInvalidMessage?.SpecialtyId} />
        </div>
        <div>
          <Selector
            lable="speciality"
            options={specialitesTitle}
            anotherValues={specialitesIds}
            {...register('SpecialtyId')}
          />
          <ZodErrors error={filedInvalidMessage?.SpecialtyId} />
        </div>
        <SettingInput
          {...register('note')}
          lable="description"
          type="text"
          placeHolder="why you want to subscrib as a doctor"
        />
        <AnimateButton className="btn-rounded bg-primary text-white ">
          {isPatient(ROLE) ? 'Apply' : 'Send'}
        </AnimateButton>
      </form>
    </AnimateUpEffect>
  );
}
