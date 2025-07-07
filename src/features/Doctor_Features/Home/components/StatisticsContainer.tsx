import { MdOutlineSick } from 'react-icons/md';
import { PiChatsCircle } from "react-icons/pi";
import { LuCalendarClock } from "react-icons/lu";
import StatisticsBox from './StatisticsBox';
import AnimateParentLeftEffect from '@/lib/Animation/AnimateParentLeftEffect';

export default function StatisticsContainer() {
  return (
    <AnimateParentLeftEffect className="sm:flex gap-4 space-y-2 ">
      <StatisticsBox title="Today Reservation" value={20} Icon={LuCalendarClock} animationDuration={0.3}/>
      <StatisticsBox title="Today Consultations" value={10} Icon={PiChatsCircle} animationDuration={0.8}/>
      <StatisticsBox title="Total patients " value={30} Icon={MdOutlineSick} animationDuration={1.2}/>
    </AnimateParentLeftEffect>
  );
}
