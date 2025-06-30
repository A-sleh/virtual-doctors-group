import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateScale from '@/lib/Animation/AnimateScale';

export type doctorInfoProps = {
  imgSrc?: string;
  name: string | undefined;
  specility: string | undefined;
  children?: React.ReactNode;
  imageSize?: string;
  fontSize?: string;
  withAnimation?: boolean;
};

export default function DoctorVectorInfo({
  name,
  specility,
  imgSrc,
  children,
  imageSize = 'w-14 h-14',
  fontSize = '',
  withAnimation = false,
}: doctorInfoProps) {
  return (
    <div className="flex gap-3">
      <AnimateScale run={withAnimation}>
      <img
        src={imgSrc}
        alt="doctor image"
        className={`rounded-full ${imageSize} bg-black`}
      />
      </AnimateScale>
      <AnimateFromToRight run={withAnimation} className="flex flex-col gap-2">
        <div className="flex flex-col space-y-1 ">
          <p className={`font-medium ${fontSize}`}>
            <span className="text-primary ">Dr.</span>
            {name}
          </p>
          <span className="text-secondary bg-third text-sm px-2 py-1  rounded-sm w-fit">
            {specility}
          </span>
        </div>
        {children}
      </AnimateFromToRight>
    </div>
  );
}
