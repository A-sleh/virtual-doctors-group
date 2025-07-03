import HasPermission from '@/context/auth/HasPermission';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';

export default function MapSnapShot() {
  return (
    <AnimateFromToRight
      offsetValue={100}
      className="rounded-box  flex-1 gap-1 flex flex-col"
    >
      <div className="flex gap-1">
        <HasPermission allowedTo={['doctor']}>
          <AnimateButton
            scale={0.9}
            className="text-nowrap px-2 py-0.5 h-fit rounded-sm text-white cursor-pointer bg-danger "
          >
            Reset location
          </AnimateButton>
        </HasPermission>
        <AnimateButton
          scale={0.9}
          className="text-nowrap px-2 py-0.5 h-fit rounded-sm text-white  cursor-pointer bg-primary "
        >
          Show location on map
        </AnimateButton>
      </div>
      <img className="w-full h-50 bg-green-400 rounded-sm" />
    </AnimateFromToRight>
  );
}
