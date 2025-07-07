import Model from '@/components/models/Model';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import { LuRefreshCcw } from 'react-icons/lu';

export default function ChangeClinic() {
  const clinics = ['The first', 'The second', 'The third'];
  return (
    <Model>
      <Model.Open opens="change-clinic">
        <LuRefreshCcw
          size={33}
          className="text-secondary bg-third p-1 rounded-full hover:rotate-180 transition-all duration-300 cursor-pointer"
        />
      </Model.Open>
      <Model.Window title="Available clinic" name="change-clinic">
        <div className="space-y-1">
          {clinics.map((clinic, index: number) => (
            <AnimateFromToRight
              duration={index / 3}
              className={`cursor-pointer hover:bg-primary hover:text-white transition-all duration-150 p-2 rounded-sm font-medium ${
                index == 0 ? 'bg-primary text-white' : 'bg-white text-secondary'
              }`}
            >
              {clinic}
            </AnimateFromToRight>
          ))}
        </div>
      </Model.Window>
    </Model>
  );
}
