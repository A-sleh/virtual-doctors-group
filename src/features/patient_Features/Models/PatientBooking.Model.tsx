import Model from '@/components/models/Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import DoctorInfoHeader from './components/DoctorInfoHeader';
import AvailableTimes from '@/features/Doctor_Features/Models/components/AvailableTimes';
import AvialableDays from './components/AvialableDays';
import { usePickTimeSlot } from '@/context/reservation/PickTimeSlotProvieder';
import {
  timeSlotInputErrorMessage,
  timeSlotNotValid,
  useUpdateReservation,
} from '../Reservation/api/update-reservation';
import { useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors';
import {
  resvervationInput,
  useCreateReservation,
} from '../Reservation/api/create-reservation';

type patientBookingProps = {
  openKey: string;
  reservationDetails: resvervationInput;
  requestMethod: 'PUT' | 'POST';
};

export default function PatientBooking({
  openKey,
  reservationDetails,
  requestMethod,
}: patientBookingProps) {
  const { updateReservation } = useUpdateReservation();
  const { createReservation } = useCreateReservation();
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<timeSlotInputErrorMessage>();
  const { getFullDate, selectedTime, selectedDay } = usePickTimeSlot();
  const slot = {
    time: selectedTime,
    date: selectedDay,
  };

  function onReSecheduleReservation(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let errorMessage;
    if ((errorMessage = timeSlotNotValid(slot))) {
      setFiledInvalidMessage(errorMessage as timeSlotInputErrorMessage);
      return;
    }

    if (requestMethod == 'PUT') {
      updateReservation({ ...reservationDetails, scheduledAt: getFullDate() });
    } else {
      createReservation({ ...reservationDetails, scheduledAt: getFullDate() });
    }
  }

  return (
    <Model>
      <Model.Open opens={openKey}>
        <AnimateButton className="btn-rounded  bg-primary text-white border border-primary">
          {openKey}
        </AnimateButton>
      </Model.Open>
      <Model.Window title="Pike a time slot" name={openKey}>
        <form
          className="space-y-3"
          onSubmit={(e) => onReSecheduleReservation(e)}
        >
          <DoctorInfoHeader />
          <AvialableDays>
            <ZodErrors error={filedInvalidMessage?.date} />
          </AvialableDays>
          <div className="rounded-box">
            <h4 className="sub-header text-lg flex justify-between items-center gap-3 text-secondary font-medium mb-2">
              Times
            </h4>
            <AvailableTimes />
            <ZodErrors error={filedInvalidMessage?.time} />
          </div>
          <AnimateButton
            withInitialScale={true}
            className="px-4 py-1 bg-primary text-white rounded-md float-end cursor-pointer"
          >
            Apply
          </AnimateButton>
        </form>
      </Model.Window>
    </Model>
  );
}
