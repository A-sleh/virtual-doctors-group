import Box from './components/Box';
import Btn from './components/Btn';
import Detail from './components/Detail';

export default function Login() {
  return (
    <div className="login">
      <Form />
      <Pictur type="login" message="Don't have an account!" />
    </div>
  );
}

function Form() {
  return (
    <div className="col-span-2 py-10 px-7">
      <Detail title="Welcom Back!" text="Provide your personal detatails" />
      <Box />
      <div className="flex justify-between text-sm mt-8">
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
      <div className=" absolute bottom-10">
        <Btn name="Login" color="text-white" backgroundColor="bg-primary" />
      </div>
    </div>
  );
}

//
//

function Pictur({ type, message }: { type: string; message: string }) {
  return (
    <div className="pictur" style={{ borderStartStartRadius: '200px' }}>
      <img
        className="rounded-full w-72"
        src="/Screenshot_٢٠٢٥٠٦١٦_١٥٤٧٥١_Google.jpg"
        alt=""
      />
      <h1 className="text-white font-bold text-2xl mt-5">
        The place where you will find
      </h1>
      <p className="text-white text-xl mt-5 text-center">
        All the medical services you need just {type} and enjoy
      </p>
      <div className="text-center absolute bottom-12">
        <p className="text-white text-sm">{message}</p>
        <a href="http://localhost:5173/auth/register">
          <Btn
            name={'Register'}
            color="text-primary"
            backgroundColor="bg-white"
          />
        </a>
      </div>
    </div>
  );
}
