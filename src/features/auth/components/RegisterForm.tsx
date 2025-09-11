import MainInput from '@/components/ui/inputs/MainInput';
import Btn from './Btn';
import FormTitle from './FomTitle';
import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  registerFormIsNotValid,
  RegisterInput,
  RegisterInputErrorMessage,
  useRegister,
} from '../api/useRegister';
import { useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors';
import { useLogin } from '../api/useLogin';
import { removeKeys } from '@/utils';
import { api } from '@/lib/api-client';
import ModelInput from '@/components/ui/inputs/ModelInput';
import Loader from '@/components/ui/loader/Loader';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterInput>({
    defaultValues: {
      birthDate: new Date(),
    },
  });

  const [isLoadding, setIsLoadding] = useState(false);
  const [urlImage, setUrlImage] = useState('');
  const [filedInvalidMessage, setFiledInvalidMessage] = useState<
    RegisterInputErrorMessage | undefined
  >(undefined);

  const { signUp, isSuccess, registerPending } = useRegister();
  const { login } = useLogin();

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    let errorMessage;
    if ((errorMessage = registerFormIsNotValid(data))) {
      setFiledInvalidMessage(errorMessage as RegisterInputErrorMessage);
      return;
    }

    signUp(
      {
        email: data.email,
        password: data.password,
        person: removeKeys<Omit<RegisterInput, 'password' | 'email'>>(
          { ...data, imageUrl: urlImage },
          ['email', 'password'],
        ),
      },
      {
        // After success the registering we will login as soon
        onSettled: () => {
          login({ email: data.email, password: data.password });
        },
      },
    );
  };

  const handlePhotoUpload = async (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('file', file); // 'file' matches the API parameter name
      setIsLoadding(true);
      try {
        const url = await api.post('/Photo', formData);
        setUrlImage(`${url}`);
        setIsLoadding(false);
      } catch (err) {
        setIsLoadding(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-10 pb-5 w-[90vw] md:w-[60vw] lg:w-full px-2 lg:px-7 md:pr-15 z-50 flex flex-col justify-between space-y-4"
    >
      {isLoadding && (
        <Loader variant="bars" className="text-primary" size={80} />
      )}
      <AnimateParentLeftEffect className="space-y-2">
        <FormTitle title="Create Your Account" text="Tell us about yourself" />
        <div className="space-y-2">
          <AnimateChildLeftEffect
            duration={0.2}
            className="flex flex-col md:flex-row gap-2 w-full "
          >
            <div>
              <MainInput
                type="text"
                lable="First name :"
                placeHolder="Your first name ..."
                {...register('firstName')}
              />
              <ZodErrors error={filedInvalidMessage?.firstName} />
            </div>
            <div>
              <MainInput
                type="text"
                lable="Last name :"
                placeHolder="Your last name ..."
                {...register('lastName')}
              />
              <ZodErrors error={filedInvalidMessage?.lastName} />
            </div>
          </AnimateChildLeftEffect>
          <AnimateChildLeftEffect
            duration={0.6}
            className="flex gap-2 flex-col md:flex-row "
          >
            <div>
              <MainInput
                type="text"
                lable="Contact number :"
                placeHolder="Your phone number ..."
                {...register('phone')}
              />
              <ZodErrors error={filedInvalidMessage?.phone} />
            </div>
            <div>
              <MainInput
                type="date"
                lable="Birth day :"
                placeHolder="Your birth day ..."
                {...register('birthDate')}
              />

              <ZodErrors error={filedInvalidMessage?.birthDate} />
            </div>
          </AnimateChildLeftEffect>
          <MainInput
            onChange={handlePhotoUpload}
            type="file"
            lable="Birth day :"
            placeHolder="Your birth day ..."
          />
          <AnimateChildLeftEffect
            duration={1}
            className="flex gap-2 flex-col md:flex-row "
          >
            {/* <MainInput type="file" lable="Profile image :" /> */}
            <div>
              <MainInput
                type="text"
                lable="Person id :"
                placeHolder="Your person id ..."
                {...register('personalId')}
              />
              <ZodErrors error={filedInvalidMessage?.personalId} />
            </div>
            <div className="mb-4 box-style">
              <label className="block text-secondary ">Gender: </label>
              <select className="input" {...register('gender')}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <ZodErrors error={filedInvalidMessage?.gender} />
          </AnimateChildLeftEffect>
        </div>
        <AnimateChildLeftEffect duration={1.2}>
          <MainInput
            type="email"
            lable="Your email :"
            placeHolder="Your email ..."
            {...register('email')}
          />
          <ZodErrors error={filedInvalidMessage?.email} />
        </AnimateChildLeftEffect>
        <AnimateChildLeftEffect duration={1.4}>
          <MainInput
            type="password"
            lable="Your password :"
            placeHolder="Your password ..."
            {...register('password')}
          />
          <ZodErrors error={filedInvalidMessage?.password} />
        </AnimateChildLeftEffect>
      </AnimateParentLeftEffect>
      <Btn
        name={'Register'}
        color="text-white"
        backgroundColor="bg-primary"
        stopEvent={isSuccess || registerPending}
      />
    </form>
  );
}
