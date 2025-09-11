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
import DoctorInfoHeader from '../../Models/components/DoctorInfoHeader';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import Loader from '@/components/ui/loader/Loader';

export default function DoctorReservationCard({
  reservationInfo,
}: {
  reservationInfo: IReservationResponse;
}) {
  const { userId } = useAuth();

  const queryClient = useQueryClient();
  const { deleteReservation, isPending: isDeleted } = useDeleteReservation();

  const {
    scheduledAt,
    text,
    virtualClinic,
    id: reservatinoId,
    type,
    status,
  } = reservationInfo;

  const { doctor, id: clinicId } = virtualClinic;
  const { firstName, lastName, speciality, location, id: doctorId } = doctor;
  const scheduledAtDate = new Date(scheduledAt);

  const reservationInput: resvervationInput = {
    virtualId: clinicId || 0,
    text: text,
    userId,
    id: reservatinoId,
    type,
    status,
  };

  function onCancelClicked(reservationId: number) {
    if (calcTheNumberOfDaysFromCurrentDateTo(scheduledAt) < 1) {
      errorToast("You can't cancel the reservation before 24 hours");
    } else {
      deleteReservation(reservationId, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [QYERY_KEYS.patient.Reservations],
          });
        },
      });
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

  if (isDeleted) {
    return <Loader variant="bars" className="text-primary" size={70} />;
  }

  const timeer = Math.floor(
    (scheduledAtDate.getTime() - new Date().getTime()) / 1000,
  );

  return (
    <>
      <DoctorBox doctor={doctorDTO}>
        <div className="flex gap-2.5">
          {timeer > 0 ? (
            <PickTimeSlotProvider
              intialDay={scheduledAtDate}
              intialTime={getTimeFromDate(scheduledAtDate, false)}
            >
              <PatientBooking
                requestMethod="PUT"
                openKey={'Reschedule'}
                reservationDetails={reservationInput}
                clinicId={clinicId}
              >
                <DoctorInfoHeader
                  location={location}
                  name={doctorDTO.name}
                  specility={speciality}
                  doctorId={doctorId}
                />
              </PatientBooking>
            </PickTimeSlotProvider>
          ) : (
            <span className="px-4 py-1 rounded-ms bg-danger text-white">
              Apoointment has been passed
            </span>
          )}
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
        {timeer > 0 && (
          <Timer
            timeStamp={Math.floor(
              (scheduledAtDate.getTime() - new Date().getTime()) / 1000,
            )}
          />
        )}
      </DoctorBox>
    </>
  );
}

function Timer({ timeStamp }: { timeStamp: number }) {
  const [time, setTime] = useState<number>(timeStamp);
  const { days, hours, minutes, seconds } = secondsToDhms(time);

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
