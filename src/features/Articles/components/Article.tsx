import DoctorVectorInfo from '@/features/Doctors/components/DoctorVectorInfo';
import { AnimateUpInView } from '@/lib/Animation/AnimateUpEffect';
import { articleProps } from '../types/article';
import AnimateScale from '@/lib/Animation/AnimateScale';
import { RiSettings5Fill } from 'react-icons/ri';
import { RiDeleteBin6Line } from 'react-icons/ri';
import AnimateButton from '@/lib/Animation/AnimateButton';
import HasPermission from '@/context/auth/HasPermission';

export default function Article({
  doctor,
  title,
  description,
  articleImage,
  showOwner = true,
}: articleProps) {
  return (
    <AnimateUpInView offsetValue={60} className="rounded-box relative">
      <img
        src={articleImage}
        className="w-full h-70 rounded-lg bg-amber-300 mb-4 mr-4 float-start md:float-left md:w-1/3 "
      />
      {showOwner && (
        <div className="absolute top-5 left-5 md:top-0 md:left-0 md:relative">
          <DoctorVectorInfo name={doctor?.name} specility={doctor?.specility} />
        </div>
      )}
      <h4 className="my-4 font-medium uppercase flex items-baseline justify-between">
        {title}
        <HasPermission allowedTo={['doctor']}>
          <div className="flex gap-2">
            <AnimateButton withInitialScale={true}>
              <RiSettings5Fill
                size={25}
                className="text-primary cursor-pointer"
              />
            </AnimateButton>
            <AnimateButton withInitialScale={true}>
              <RiDeleteBin6Line
                size={25}
                className="text-danger cursor-pointer"
              />
            </AnimateButton>
          </div>
        </HasPermission>
      </h4>
      <div className="text-wrap text-gray-500">{description}</div>
    </AnimateUpInView>
  );
}
