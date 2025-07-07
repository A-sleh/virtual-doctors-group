import MainInput from '@/components/ui/inputs/MainInput';
import FormTitle from './FomTitle';
import Btn from './Btn';
import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';

export default function LoginFrom() {
  return (
    <form className="pt-10 pb-5 w-[90vw] sm:w-full px-2 sm:px-7 md:pr-15  z-50 flex flex-col justify-between space-y-4">
      <AnimateParentLeftEffect className="space-y-2">
        <FormTitle
          title="Welcom Back!"
          text="Provide your personal detatails"
        />
        <AnimateChildLeftEffect duration={0.3}>
          <MainInput
            type="email"
            lable="Your email :"
            placeHolder="Your email ..."
          />
        </AnimateChildLeftEffect>
        <AnimateChildLeftEffect duration={0.6}>
          <MainInput
            type="password"
            lable="Your password :"
            placeHolder="Your password ..."
          />
        </AnimateChildLeftEffect>
        <div className="flex justify-between text-sm ">
          <span>
            <input
              className="cursor-pointer"
              type="checkbox"
              name=""
              id="remember"
            />
            <label htmlFor="remember" className="ml-1 cursor-pointer">
              Remember me
            </label>
          </span>
          <span className="text-primary">
            <a href="http://localhost:5173/auth/login"> Forgot password?</a>
          </span>
        </div>
      </AnimateParentLeftEffect>
      <Btn name={'Login'} color="text-white" backgroundColor="bg-primary" />
    </form>
  );
}
