import DoctorBox from '@/features/Consultation/components/DoctorBox';
import AnimateButton from '@/lib/Animation/AnimateButton';
import { useDeleteReservation } from '../api/delete-reservation';
import {
  calcTheNumberOfDaysFromCurrentDateTo,
  formatDateMonthYearDay,
  getTimeFromDate,
  secondsToDhms,
} from '@/utils';
import ConfirmModel from '@/components/models/ConfirmModel';
import PatientBooking from '../../Models/PatientBooking.Model';
import { PickTimeSlotProvider } from '@/context/reservation/PickTimeSlotProvieder';
import { resvervationInput } from '../api/create-reservation';
import { useAuth } from '@/context/auth/AuthProvider';
import { errorToast } from '@/components/custom/toast';
import { IReservationResponse } from '../api/get-reservations';
import { useEffect, useState } from 'react';

export default function DoctorReservationCard({
  reservationInfo,
}: {
  reservationInfo: IReservationResponse;
}) {
  const { userId } = useAuth();
  const { deleteReservation, isPending } = useDeleteReservation();

  const {
    scheduledAt,
    text,
    virtualClinic,
    id: reservatinoId,
  } = reservationInfo;
  const { doctorId, doctor } = virtualClinic;
  const { firstName, lastName, speciality } = doctor;
  const scheduledAtDate = new Date(scheduledAt);

  if (isPending) return <h2>Loading ...</h2>;

  const reservationInput: resvervationInput = {
    virtualId: doctorId || 0,
    text: text,
    userId,
  };

  function onCancelClicked(reservationId: number) {
    if (calcTheNumberOfDaysFromCurrentDateTo(scheduledAt) < 1) {
      errorToast("You can't cancel the reservation before 24 hours");
    } else {
      deleteReservation(reservationId);
    }
  }

  const doctorDTO = {
    doctorId: doctorId,
    name: firstName + ' ' + lastName,
    specility: speciality,
    date: formatDateMonthYearDay(scheduledAtDate),
    time: getTimeFromDate(scheduledAtDate),
    description: text,
  };

  return (
    <>
      <DoctorBox doctor={doctorDTO}>
        <div className="flex gap-2.5">
          <PickTimeSlotProvider
            intialDay={scheduledAtDate}
            intialTime={getTimeFromDate(scheduledAtDate)}
          >
            <PatientBooking
              requestMethod="PUT"
              openKey={'Reschedule'}
              reservationDetails={reservationInput}
            />
          </PickTimeSlotProvider>
          {calcTheNumberOfDaysFromCurrentDateTo(scheduledAt) > 1 ? (
            <ConfirmModel
              onConfirmClick={() => onCancelClicked(reservatinoId)}
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
          ) : null}
        </div>
        <Timer
          timeStamp={Math.floor(
            (scheduledAtDate.getTime() - new Date().getTime()) / 1000,
          )}
        />
      </DoctorBox>
    </>
  );
}

function Timer({ timeStamp }: { timeStamp: number }) {
  const [time, setTime] = useState<number>(timeStamp);
  const { days, hours, minutes, seconds } = secondsToDhms(time);
  console.log({ days, hours, minutes, seconds });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((last) => last - 1);
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <h4 className="rounded-tl-md rounded-br-md text-[1rem] bg-primary px-4 py-0.5 text-white h-fit">
      {days} : {hours} : {minutes} : {seconds}
    </h4>
  );
}
