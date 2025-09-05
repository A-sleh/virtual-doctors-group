import SettingInput from '@/components/ui/inputs/SettingInput';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  clinicInputsErrorMessages,
  clinicInputsType,
  newClinicFormIsNotValid,
} from '../api/create-profile-info';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import { mapedDays } from '@/utils';
import { useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors';
import Map from '@/lib/googleMap/Maps';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { useUrlPosition } from '@/hooks/useUrlPosition';

export default function NewClinicForm() {
  const [nextStep, setNextStep] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<clinicInputsType>();
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<clinicInputsErrorMessages | null>(null);
  const { lat, lng, setSearchParams } = useUrlPosition();

  const onSubmit: SubmitHandler<clinicInputsType> = (data) => {
    let messages;
    if ((messages = newClinicFormIsNotValid(data))) {
      setFiledInvalidMessage(messages as clinicInputsErrorMessages);
      setSearchParams((pre) => pre);
      return;
    }
    if (!nextStep) setNextStep(true);
    else {
    }
  };

  return (
    <AnimateUpEffect className="rounded-box space-y-2 w-full h-fit">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {nextStep ? (
          <div className="w-full h-[30rem] flex flex-col">
            <div className="flex-2">
              <Map showOnly={false} withControle={true} zoom={3} />
            </div>

            <SettingInput
              {...register('location')}
              lable="Location name"
              type="text"
              placeHolder="your location name"
            />
          </div>
        ) : (
          <div className="space-y-3 w-full">
            <div className="sm:flex gap-2">
              <div className="w-full">
                <SettingInput
                  {...register('name')}
                  lable="Clinic title"
                  type="text"
                  placeHolder="your clinic title"
                />
                <ZodErrors error={filedInvalidMessage?.name} />
              </div>
              <div className="w-full">
                <SettingInput
                  {...register('avgService')}
                  lable="Average of service"
                  type="number"
                  placeHolder="20"
                />
                <ZodErrors error={filedInvalidMessage?.avgService} />
              </div>
            </div>
            <div className="w-full">
              <SettingInput
                {...register('previewCost')}
                lable="Preview cost"
                type="tnumber"
                placeHolder="enter your preview cost"
              />
              <ZodErrors error={filedInvalidMessage?.previewCost} />
            </div>
            <h3 className="text-primary text-[0.9rem] mb-1">
              Day hours New durations
            </h3>
            <div className="sm:flex gap-2">
              <div className="w-full">
                <SettingInput
                  {...register('startWorkHours')}
                  lable="Start work hours"
                  type="text"
                  placeHolder="00:00"
                />
                <ZodErrors error={filedInvalidMessage?.startWorkHours} />
              </div>
              <div className="w-full">
                <SettingInput
                  {...register('endWorkHours')}
                  lable="End work hours"
                  type="text"
                  placeHolder="00:00"
                />
                <ZodErrors error={filedInvalidMessage?.endWorkHours} />
              </div>
            </div>
            <h3 className="text-primary text-[0.9rem] mb-1">Working days</h3>
            <div className="space-x-2 my-2">
              {mapedDays.map((day, index) => (
                <label
                  key={day}
                  className={`cursor-pointer px-4 py-0.5 h-fit font-medium bg-primary-hover rounded-sm text-white has-checked:bg-primary`}
                >
                  <input
                    type="checkbox"
                    hidden={true}
                    value={index}
                    {...register('holidays')} // Register all checkboxes under the same name 'fruits'
                  />
                  {day}
                </label>
              ))}
              <ZodErrors error={filedInvalidMessage?.holidays} />
            </div>
          </div>
        )}
        <AnimateButton className="px-4 py-1 bg-primary text-white rounded-md float-end cursor-pointer">
          {nextStep ? 'Apply' : 'Next'}
        </AnimateButton>
      </form>
    </AnimateUpEffect>
  );
}
