import Box from './components/Box';
import Btn from './components/Btn';
import Detail from './components/Detail';
export default function Register() {
  return (
    <div className="login">
      <Form />
      <Pictur type="register" message="Already have an account!" />
    </div>
  );
}

function Form() {
  return (
    <div className="col-span-2 py-10 px-7">
      <Detail title="Create Your Account" text="Tell us about yourself" />
      <Forms />
      <Box />
      <div className=" absolute bottom-10">
        <Btn
          name={'Register'}
          color="text-white"
          backgroundColor="bg-primary"
        />
      </div>
    </div>
  );
}

function Forms() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
      <div className=" box-style">
        <label className="block text-gray-500 ">Full name: </label>
        <input className="input" type="text" placeholder="Your name" />
      </div>
      <div className=" box-style">
        <label className="block text-gray-500 ">Person id: </label>
        <input className="input" type="text" placeholder="0000000000000" />
      </div>
      <div className=" box-style">
        <label className="block text-gray-500 ">Email: </label>
        <input
          className="input"
          type="email"
          placeholder="youremail@gmail.com"
        />
      </div>
      <div className=" box-style">
        <label className="block text-gray-500 ">Birth day: </label>
        <input className="input" type="date" />
      </div>
      <div className="mb-4 box-style">
        <label className="block text-gray-500 ">Gender: </label>
        <select className="input" name="" id="">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4 box-style">
        <label className="block text-gray-500 ">Profile image: </label>
        <input className="input" type="file" />
      </div>
    </div>
  );
}

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
        <a href="http://localhost:5173/auth/login">
          <Btn name={'Login'} color="text-primary" backgroundColor="bg-white" />
        </a>
      </div>
    </div>
  );
}
