import { AnimateChildLeftEffect } from "@/lib/Animation/AnimateParentLeftEffect";

type statisticsBoxType = {
  title: string;
  value: number;
  Icon: React.ElementType;
  animationDuration?: number;
};

export default function StatisticsBox({ title, value ,Icon ,animationDuration }: statisticsBoxType) {
  return (
    <AnimateChildLeftEffect duration={animationDuration} className="space-y-2 p-4 rounded-box flex justify-between gap-4 w-full h-full ">
      <div>
        <span className="text-3xl font-medium">{value}</span>
        <h4 className="text-nowrap">{title}</h4>
      </div>
      <Icon size={35} className='text-primary' />
    </AnimateChildLeftEffect>
  );
}
