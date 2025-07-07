import MainInput from '@/components/ui/inputs/MainInput';
import Btn from './Btn';
import FormTitle from './FomTitle';
import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';

export default function RegisterForm() {
  return (
    <form className="pt-10 pb-5 w-[90vw] md:w-[60vw] lg:w-full px-2 lg:px-7 md:pr-15 z-50 flex flex-col justify-between space-y-4">
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
            />
            <MainInput
              type="text"
              lable="Person id :"
              placeHolder="Your person id ..."
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
            />
            <MainInput
              type="date"
              lable="Birth day :"
              placeHolder="Your birth day ..."
            />
          </AnimateChildLeftEffect>
          <AnimateChildLeftEffect
            duration={1}
            className="flex gap-2 flex-col md:flex-row "
          >
            <MainInput type="file" lable="Profile image :" />
            <div className="mb-4 box-style">
              <label className="block text-secondary ">Gender: </label>
              <select className="input" name="" id="">
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
          />
        </AnimateChildLeftEffect>
        <AnimateChildLeftEffect duration={1.4}>
          <MainInput
            type="password"
            lable="Your password :"
            placeHolder="Your password ..."
          />
        </AnimateChildLeftEffect>
      </AnimateParentLeftEffect>
      <Btn name={'Register'} color="text-white" backgroundColor="bg-primary" />
    </form>
  );
}
