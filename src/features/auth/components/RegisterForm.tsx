import MainInput from '@/components/ui/inputs/MainInput';
import Btn from './Btn';
import FormTitle from './FomTitle';
import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterInput } from '../api/useRegister';

export default function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterInput>();

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="pt-10 pb-5 w-[90vw] md:w-[60vw] lg:w-full px-2 lg:px-7 md:pr-15 z-50 flex flex-col justify-between space-y-4"
    >
      <AnimateParentLeftEffect className="space-y-2">
        <FormTitle title="Create Your Account" text="Tell us about yourself" />
        <div className="space-y-2">
          <AnimateChildLeftEffect
            duration={0.2}
            className="flex flex-col md:flex-row gap-2 w-full "
          >
            <MainInput
              type="text"
              lable="Full name :"
              placeHolder="Your name ..."
              {...register('name')}
            />
            <MainInput
              type="text"
              lable="Person id :"
              placeHolder="Your person id ..."
              {...register('personId')}
            />
          </AnimateChildLeftEffect>
          <AnimateChildLeftEffect
            duration={0.6}
            className="flex gap-2 flex-col md:flex-row "
          >
            <MainInput
              type="text"
              lable="Contact number :"
              placeHolder="Your phone number ..."
              {...register('contactNumber')}
            />
            <MainInput
              type="date"
              lable="Birth day :"
              placeHolder="Your birth day ..."
              {...register('birthDate')}
            />
          </AnimateChildLeftEffect>
          <AnimateChildLeftEffect
            duration={1}
            className="flex gap-2 flex-col md:flex-row "
          >
            <MainInput type="file" lable="Profile image :" />
            <div className="mb-4 box-style">
              <label className="block text-secondary ">Gender: </label>
              <select className="input" {...register('gender')}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </AnimateChildLeftEffect>
        </div>
        <AnimateChildLeftEffect duration={1.2}>
          <MainInput
            type="email"
            lable="Your email :"
            placeHolder="Your email ..."
            {...register('email')}
          />
        </AnimateChildLeftEffect>
        <AnimateChildLeftEffect duration={1.4}>
          <MainInput
            type="password"
            lable="Your password :"
            placeHolder="Your password ..."
            {...register('password')}
          />
        </AnimateChildLeftEffect>
      </AnimateParentLeftEffect>
      <Btn name={'Register'} color="text-white" backgroundColor="bg-primary" />
    </form>
  );
}
