import Model from '@/components/models/Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AvailableTimes from './components/AvailableTimes';
import { useCreateReservation } from '@/features/patient_Features/Reservation/api/create-reservation';

export default function Booking() {
  const { createReservation } = useCreateReservation();

  return (
    <Model>
      <Model.Open opens="booking">
        <AnimateButton className="text-center rounded-sm text-white bg-primary my-2 cursor-pointer hover:bg-primary-hover transition-all duration-150">
          New Reservation
        </AnimateButton>
      </Model.Open>
      <Model.Window title="Timese" name="booking">
        <AvailableTimes />

        <AnimateButton
          withInitialScale={true}
          className="px-4 py-1 bg-primary text-white rounded-md float-end cursor-pointer"
        >
          Apply
        </AnimateButton>
      </Model.Window>
    </Model>
  );
}
