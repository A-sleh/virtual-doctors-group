import { useNavigate, useSearchParams } from 'react-router';

import { IoArrowBackCircleOutline } from 'react-icons/io5';
import AnimateDownEffect from '@/lib/Animation/AnimateDownEffect';

export default function ChatHeader() {

  const goto = useNavigate();
  const [params, _] = useSearchParams();
  const userName = params.get('userName');
  const isDoctor = params.get('isDoctor');

  //! Todo: The image should cames when the user click on any doctor to talk with him 

  return (
    <AnimateDownEffect className="sub-header flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="relative">
          <img className="rounded-full w-10 h-10 bg-danger" />
          <span className="w-2 h-2 rounded-full bg-fourth absolute top-1 right-0 "></span>
        </div>
        <h1>
          <span className="text-primary">{isDoctor == 'true' && 'Dr.'}</span>
          {userName}
        </h1>
      </div>
      <IoArrowBackCircleOutline
        size={38}
        className="text-primary cursor-pointer"
        onClick={() => goto(-1)}
      />
    </AnimateDownEffect>
  );
}
