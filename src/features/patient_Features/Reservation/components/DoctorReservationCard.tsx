import DoctorBox from '@/features/Consultation/components/DoctorBox';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { reservationProps } from '../types/reservations';
import { useDeleteReservation } from '../api/delete-reservation';
import { calcTheNumberOfDaysFromCurrentDateTo } from '@/utils';
import ConfirmModel from '@/components/models/ConfirmModel';
import PatientBooking from '../../Models/PatientBooking.Model';
import { PickTimeSlotProvider } from '@/context/reservation/PickTimeSlotProvieder';
import { resvervationInput } from '../api/create-reservation';
import { useAuth } from '@/context/auth/AuthProvider';
import { errorToast } from '@/components/custom/toast';

export default function DoctorReservationCard({ doctor }: reservationProps) {
  const { userId } = useAuth();
  const { deleteReservation, isPending } = useDeleteReservation();
  const reservationInput: resvervationInput = {
    virtualId: doctor?.doctorId || 0,
    text: doctor.description,
    type: 0,
    userId,
  };

  function onCancelClicked(reservationId: number) {
    if (calcTheNumberOfDaysFromCurrentDateTo(doctor.date) < 1) {
      errorToast("You can't cancel the reservation before 24 hours");
    } else {
      deleteReservation(reservationId);
    }
  }

  if (isPending) return <h2>Loading ...</h2>;

  return (
    <DoctorBox doctor={doctor}>
      <div className="flex gap-2.5">
        <PickTimeSlotProvider
          intialDay={new Date('2025-8-14')}
          intialTime={doctor.time}
        >
          <PatientBooking
            requestMethod="PUT"
            openKey={'Reschedule'}
            reservationDetails={reservationInput}
          />
        </PickTimeSlotProvider>
        <ConfirmModel
          onConfirmClick={() => onCancelClicked(1)}
          openKey="cancel-reservation"
          description="Are you sure to cancel this reservation, you can rollback by clicking on cancel button"
        >
          <AnimateButton
            scale={0.9}
            className="btn-rounded bg-white text-danger border-1 transition-all duration-100 border-danger hover:bg-danger hover:text-white"
          >
            Cancel
          </AnimateButton>
        </ConfirmModel>
      </div>
      <h4 className="rounded-tl-md rounded-br-md text-[1rem] bg-primary px-4 py-0.5 text-white h-fit">
        24:10:40
      </h4>
    </DoctorBox>
  );
}
