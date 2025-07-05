import AnimateParentScaleUp, { AnimateChildScaleUpChild } from "@/lib/Animation/AnimateParentScaleUpChild";
import { times } from "../api/data";

export default function AvailableTimes() {
  return (
    <AnimateParentScaleUp className="flex gap-2 flex-wrap justify-center">
      {times.map((time, index: number) => {
        return (
          <AnimateChildScaleUpChild
            duration={index / 10}
            className={`px-4 py-2 rounded-lg text-secondary  text-nowrap  ${
              time.status == 'close'
                ? ' bg-[#ffffff7c] pointer-events-none '
                : ' bg-white cursor-pointer'
            } `}
          >
            {time.time}
          </AnimateChildScaleUpChild>
        );
      })}
    </AnimateParentScaleUp>
  );
}
