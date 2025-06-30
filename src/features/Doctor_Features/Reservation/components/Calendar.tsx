import AnimateParentScaleUp, {
  AnimateChildScaleUpChild,
} from '@/lib/Animation/AnimateParentScaleUpChild';


export default function Calendar() {
  return (
    <AnimateParentScaleUp className="grid grid-cols-7 gap-1">
      {[1, 2, 3, 4, 5, 6, 8].map((el, index) => (
        <AnimateChildScaleUpChild
          duration={index / 2}
          className="flex flex-col cursor-pointer bg-white w-full rounded-md overflow-hidden text-white border border-danger"
        >
          <h3 className="flex justify-between items-center text-md p-1 font-medium bg-danger">
            Sun <span>1</span>
          </h3>
          <h1 className="rounded-md m-3 bg-danger text-3xl font-medium flex items-center justify-center p-5 py-10">
            20%
          </h1>
        </AnimateChildScaleUpChild>
      ))}
    </AnimateParentScaleUp>
  );
}
