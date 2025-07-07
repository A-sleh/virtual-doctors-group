import AnimateParentScaleUp, {
  AnimateChildScaleUpChild,
} from '@/lib/Animation/AnimateParentScaleUpChild';


export default function Calendar() {
  return (
    <AnimateParentScaleUp className="flex flex-wrap sm:grid sm:grid-cols-7 gap-1">
      {[1, 2, 3, 4, 5, 6, 8,1,1,1,1,1,].map((el, index) => (
        <AnimateChildScaleUpChild
          duration={index / 2}
          className="flex flex-col cursor-pointer bg-white sm:w-full rounded-md overflow-hidden text-white border border-danger"
        >
          <h3 className="flex justify-between items-center text-md px-1 py-0.5 font-medium bg-danger gap-1">
            Sun <span>1</span>
          </h3>
          <h1 className="rounded-md hidden m-1.5 lg:m-3 bg-danger text-[1.4em] font-medium sm:flex items-center justify-center px-3 py-5 lg:p-5 lg:py-10">
            20%
          </h1>
        </AnimateChildScaleUpChild>
      ))}
    </AnimateParentScaleUp>
  );
}
