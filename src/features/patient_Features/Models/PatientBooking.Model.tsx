import Model from '@/components/models/Model';
import AnimateButton from '@/lib/Animation/AnimateButton';
import DoctorInfoHeader from './components/DoctorInfoHeader';
import AvailableTimes from '@/features/Doctor_Features/Models/components/AvailableTimes';
import AvialableDays from './components/AvialableDays';
import {
  PickTimeSlotProvider,
  usePickTimeSlot,
} from '@/context/reservation/PickTimeSlotProvieder';
import {
  timeSlotInputErrorMessage,
  timeSlotNotValid,
  useUpdateReservation,
} from '../Reservation/api/update-reservation';
import { useEffect, useState } from 'react';
import ZodErrors from '@/components/custom/ZodErrors';
import {
  resvervationInput,
  useCreateReservation,
} from '../Reservation/api/create-reservation';
import { getDateFromDayAndTime } from '@/utils';
import { useQueryClient } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import Loader from '@/components/ui/loader/Loader';
import MainInput from '@/components/ui/inputs/MainInput';
import { useAuth } from '@/context/auth/AuthProvider';
import PaymentForm from './components/PaymentForm';
import { useForm } from 'react-hook-form';
import {
  consultaionInput,
  paymentFormIsNotValid,
  paymentInput,
  paymentInputMessage,
} from '@/features/Consultation/api/create-consultaion';
import { MdClose } from 'react-icons/md';
import { successToast } from '@/components/custom/toast';
import { useMakeUserRevision } from '@/features/Doctor_Features/Reservation/api/create-clinic-reservations';

type patientBookingProps = {
  openKey: string;
  reservationDetails: resvervationInput;
  requestMethod: 'PUT' | 'POST';
  children: React.ReactElement;
  clinicId: number | undefined;
  reservationCots?: number;
};

export default function PatientBooking({
  openKey,
  reservationDetails,
  requestMethod,
  clinicId,
  children,
  reservationCots,
}: patientBookingProps) {
  const { userId } = useAuth();
  const queryClient = useQueryClient();
  //Start For payment
  const { register, handleSubmit, reset, getValues } = useForm<paymentInput>();
  const [paymentMessage, setpaymentMessage] = useState<paymentInputMessage>();
  //End For payment

  const [nextStep, setNextStep] = useState<boolean>(false);
  const { updateReservation, isPending: isUpdate } = useUpdateReservation();
  const { createReservation, isPending: isCreate } = useCreateReservation();
  const { makeRevision, isPending: isRevision } = useMakeUserRevision();
  const [filedInvalidMessage, setFiledInvalidMessage] =
    useState<timeSlotInputErrorMessage>();
  const { selectedTime, selectedDay } = usePickTimeSlot();
  const [text, setText] = useState(requestMethod?.text || '');
  const slot = {
    time: selectedTime,
    date: selectedDay,
    text: text,
  };

  console.log(selectedDay);

  function reFetchReservations() {
    queryClient.invalidateQueries({
      queryKey: [QYERY_KEYS.patient.Reservations],
    });
    if (reservationDetails?.type == 'Revision') {
      queryClient.invalidateQueries({
        queryKey: [QYERY_KEYS.doctor.Reservations],
      });
    }
  }

  function onReSecheduleReservation() {
    let errorMessage;
    let paymentError;
    if ((errorMessage = timeSlotNotValid(slot)) && !nextStep) {
      setFiledInvalidMessage(errorMessage as timeSlotInputErrorMessage);
      return;
    }

    if (!nextStep && reservationCots != 0) {
      setNextStep(true);
      setFiledInvalidMessage({});
      return;
    }
    if (
      (paymentError = paymentFormIsNotValid(getValues())) &&
      reservationCots != 0
    ) {
      setpaymentMessage(paymentError as paymentInputMessage);
      return;
    }

    if (requestMethod == 'PUT') {
      updateReservation(
        {
          ...reservationDetails,
          scheduledAt: getDateFromDayAndTime(selectedDay, selectedTime),
        },
        {
          onSuccess: () => {
            reFetchReservations();
          },
        },
      );
    } else {
      if (reservationDetails?.type && reservationDetails?.type == 'Revision') {
        makeRevision(
          {
            ...reservationDetails,
            scheduledAt: getDateFromDayAndTime(selectedDay, selectedTime),
            text,
          },
          {
            onSuccess: () => {
              reFetchReservations()
            },
          },
        );
      } else {
        createReservation(
          {
            text,
            scheduledAt: getDateFromDayAndTime(selectedDay, selectedTime),
            userId,
            virtualId: clinicId,
          },
          {
            onSuccess: () => {
              successToast(
                `It was deducted ${reservationCots} from your balance`,
              );
              reFetchReservations();
            },
          },
        );
      }
    }
  }

  function reSetFields() {
    reset();
    setNextStep(false);
    setText('');
    setFiledInvalidMessage({});
    setpaymentMessage({});
  }

  if (isUpdate || isCreate || isRevision) {
    return <Loader variant="bars" className="text-primary" size={70} />;
  }

  return (
    <Model>
      <Model.Open opens={openKey}>
        <span className="btn-rounded w-full mt-auto  bg-primary text-white border border-primary">
          {openKey}
        </span>
      </Model.Open>

      <Model.Window
        title="Pike a time slot"
        name={openKey}
        outClose={
          <MdClose
            size={24}
            onClick={reSetFields}
            className="text-danger cursor-pointer"
          />
        }
      >
        <div className="relative w-full h-[600px] overflow-hidden">
          {/* Reservation Section */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
              nextStep ? '-translate-x-full' : 'translate-x-0'
            }`}
          >
            <div className="space-y-3">
              {children}
              <AvialableDays>
                <ZodErrors error={filedInvalidMessage?.date} />
              </AvialableDays>
              <div className="rounded-box">
                <h4 className="sub-header text-lg text-secondary font-medium mb-2">
                  Times
                </h4>
                <AvailableTimes clinicId={clinicId} />
                <ZodErrors error={filedInvalidMessage?.time} />
              </div>
              <div className="rounded-box">
                <h4 className="sub-header text-lg text-secondary font-medium mb-2">
                  Reservation content
                </h4>
                <MainInput
                  type="text"
                  lable="Description of reservation"
                  placeHolder="Enter why you need to reservation ..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
                <ZodErrors error={filedInvalidMessage?.text} />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div
            className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
              nextStep ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <PaymentForm
              register={register}
              filedInvalidMessage={paymentMessage}
            />
          </div>

          {/* Button */}
          <div className="flex gap-2 absolute bottom-0 right-0">
            <span
              onClick={onReSecheduleReservation}
              withInitialScale={true}
              className="px-4 py-1 bg-primary text-white rounded-md cursor-pointer w-full "
            >
              {!nextStep ? 'Next' : 'Send'}
            </span>
            {nextStep && (
              <span
                onClick={() => setNextStep(false)}
                disabled={!nextStep}
                withInitialScale={true}
                className="px-4 py-1 bg-primary text-white rounded-md  cursor-pointer w-full "
              >
                last
              </span>
            )}
          </div>
        </div>
      </Model.Window>
    </Model>
  );
}
