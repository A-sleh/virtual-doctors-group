import Model from '@/components/models/Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AvailableTimes from './components/AvailableTimes';

export default function Booking() {
  return (
    <Model>
      <Model.Open opens="booking">
        <AnimateButton className="text-center rounded-sm text-white bg-primary my-2 cursor-pointer hover:bg-primary-hover transition-all duration-150">
          New Reservation
        </AnimateButton>
      </Model.Open>
      <Model.Window title="Timese" name="booking">
        <AvailableTimes />
      </Model.Window>
    </Model>
  );
}
