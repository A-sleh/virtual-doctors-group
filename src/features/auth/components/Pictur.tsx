import img from '@/assets/images/vecteezy_man-technologist-2d-cartoon-illustraton-on-white-background_30689624.webp';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';
import AnimateScale from '@/lib/Animation/AnimateScale';

export default function Pictur({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  return (
    <div className="pictur md:rounded-tl-[130px] lg:rounded-tl-[160px]  gap-10 md:before:content-[''] ">
      <AnimateParentLeftEffect className="flex-col items-center mx-3 hidden md:flex">
        <AnimateScale>
          <img className="rounded-full w-60 lg:w-80 " src={img} />
        </AnimateScale>
        <AnimateChildLeftEffect
          duration={0.3}
          className="text-white font-medium text-lg lg:text-xl mt-5 "
        >
          The place where you will find
        </AnimateChildLeftEffect>
        <AnimateChildLeftEffect
          duration={0.8}
          className="text-white text-sm lg:text-md mt-1 text-center w-60 lg:w-80 lg:px-10 "
        >
          All the medical services you need just {type} and enjoy
        </AnimateChildLeftEffect>
      </AnimateParentLeftEffect>
      <AnimateFromToRight offsetValue={100}>{children}</AnimateFromToRight>
    </div>
  );
}
