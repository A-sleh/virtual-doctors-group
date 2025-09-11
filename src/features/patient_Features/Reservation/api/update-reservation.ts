import z from 'zod';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { formIsNotValid } from '@/utils';
import { resvervationInput } from './create-reservation';
import { errorToast, successToast } from '@/components/custom/toast';

enum reservationControler {
  BASE = '/Reservation',
}

export const timeSlotInputSchema = z.object({
  time: z.string().min(1, 'Please select one of an available time slot'),
  date: z.string().min(1, 'Please select one of an available date slot'),
  text: z
    .string()
    .min(1, 'Please write why you needed to reserve this booking'),
});

export type timeSlotInput = z.infer<typeof timeSlotInputSchema>;
export type timeSlotInputErrorMessage = {
  [x in keyof timeSlotInput]?: string[] | undefined;
};

export function timeSlotNotValid(data: timeSlotInput) {
  return formIsNotValid(timeSlotInputSchema, data);
}

async function updateReservationApi(data: resvervationInput) {
  try {
    const response = await api.put(`${reservationControler.BASE}`, data);
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

async function changeRservationStatusApi(reservationId: number) {
  try {
    const response = await api.put(
      `${reservationControler.BASE}/${reservationId}/Preview`,
    );
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

function usePreviweRservation() {
  const { mutate: previweReservation, isPending } = useMutation({
    mutationFn: changeRservationStatusApi,
    onSuccess: () => {
      successToast('Reservation was previwed successfuly');
    },
    onError: (err: Error) => {
      errorToast(`Error while previwed the reservation,${err.message}`);
    },
  });

  return { previweReservation, isPending };
}

function useUpdateReservation() {
  const { mutate: updateReservation, isPending } = useMutation<
    unknown,
    Error,
    resvervationInput,
    unknown
  >({
    mutationFn: updateReservationApi,
    onSuccess: () => {
      successToast('Reservation was re-schedule successfuly');
    },
    onError: (err: Error) => {
      errorToast(`Error while re-schedule the reservation,${err.message}`);
    },
  });

  return { updateReservation, isPending };
}

export { useUpdateReservation, usePreviweRservation };
