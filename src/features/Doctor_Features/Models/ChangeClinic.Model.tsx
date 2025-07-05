import Model from '@/components/models/Model';
import AnimateParentLeftEffect, {
  AnimateChildLeftEffect,
} from '@/lib/Animation/AnimateParentLeftEffect';

export default function ChangeClinic() {
  const clinics = ['The first', 'The second', 'The third'];
  return (
    <Model >
      <Model.Open opens='change-clinic'>

      </Model.Open>
      <Model.Window title="Available clinic" name='change-clinic'>
      <AnimateParentLeftEffect className="space-y-1">
        {clinics.map((clinic, index: number) => (
          <AnimateChildLeftEffect
            duration={index / 10}
            className={`cursor-pointer hover:bg-primary hover:text-white transition-all duration-150 p-2 rounded-sm font-medium ${
              index == 0 ? 'bg-primary text-white' : 'bg-white text-secondary'
            }`}
          >
            {clinic}
          </AnimateChildLeftEffect>
        ))}
      </AnimateParentLeftEffect>
      </Model.Window>
    </Model>
  );
}
