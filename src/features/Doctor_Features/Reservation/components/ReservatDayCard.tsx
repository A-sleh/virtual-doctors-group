import { useState } from 'react';
import { MdAccessTime } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import AnimateFromToRight from '@/lib/Animation/AnimateFromLeftToRight';
import AnimateButton from '@/lib/Animation/AnimateButton';
import AnimateDropDownList from '@/lib/Animation/AnimateDropDownList';
import { reservatDayCardProps } from '../types/reservation';
import ConfirmModel from '@/components/models/ConfirmModel';
import { useDeleteReservation } from '@/features/patient_Features/Reservation/api/delete-reservation';
import { usePreviweRservation } from '@/features/patient_Features/Reservation/api/update-reservation';
import Loader from '@/components/ui/loader/Loader';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import PatientBooking from '@/features/patient_Features/Models/PatientBooking.Model';
import { PickTimeSlotProvider } from '@/context/reservation/PickTimeSlotProvieder';

export default function ReservatDayCard({
  reservation,
  duration,
}: reservatDayCardProps) {
  const queryClient = useQueryClient();

  const [openReservation, setOpenReservation] = useState(false);
  const { deleteReservation } = useDeleteReservation();
  const { isPending, previweReservation } = usePreviweRservation();
  const {
    time,
    desctiption,
    owner,
    id: reservationId,
    status,
    type,
    userId,
    clinicId,
  } = reservation;

  const isPreviewed = status.toLocaleLowerCase() == 'previewed';

  function handlePreviweClicked() {
    previweReservation(reservationId, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QYERY_KEYS.doctor.Reservations],
        });
        queryClient.invalidateQueries({
          queryKey: [QYERY_KEYS.doctor.calendarDays],
        });
      },
    });
  }

  if (isPending) {
    return <Loader variant="bars" className="text-primary" size={80} />;
  }

  return (
    <AnimateFromToRight duration={duration}>
      <div
        className="px-1.5 py-1 h-fit flex justify-between items-center bg-white rounded-sm cursor-pointer"
        onClick={() => setOpenReservation((last) => !last)}
      >
        <div className="flex gap-1">
          <MdAccessTime size={25} />
          {time}
        </div>
        <IoIosArrowDown
          size={22}
          className={`${
            !openReservation && 'rotate-180'
          } transition-all duration-200`}
        />
      </div>

      <AnimateDropDownList
        className={`rounded-bl-sm rounded-br-sm overflow-hidden bg-white mt-0.5 ${
          !openReservation && 'h-0'
        } `}
      >
        <h5 className="pt-2 pl-2 font-medium flex justify-between items-center w-full ">
          {owner}{' '}
          <span
            className={`rounded-sm font-light text-sm p-1 mr-1 text-white ${
              type == 'Preview' ? 'bg-primary' : 'bg-danger'
            }`}
          >
            {type}
          </span>
        </h5>
        <p className="text-wrap text-secondary text-sm p-2 ">{desctiption}</p>
        {!isPreviewed ? (
          <ConfirmModel
            openKey="preview-reservation"
            onConfirmClick={handlePreviweClicked}
            description="Are you sure to previewed this reservation, if not click on cancel button"
          >
            <AnimateButton
              scale={1.1}
              className="text-center font-normal w-full bg-danger text-white cursor-pointer"
            >
              Previewed
            </AnimateButton>
          </ConfirmModel>
        ) : (
          <PickTimeSlotProvider intialDay={new Date(2027,2,2)}>
            <PatientBooking
              reservationCots={0}
              clinicId={clinicId}
              openKey="Revision"
              requestMethod="POST"
              reservationDetails={{
                text: '',
                userId,
                virtualId: clinicId,
                type: 'Revision',
              }}
            />
          </PickTimeSlotProvider>
        )}
      </AnimateDropDownList>
    </AnimateFromToRight>
  );
}
