import z from 'zod';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { formIsNotValid } from '@/utils';
import { resvervationInput } from './create-reservation';

enum reservationControler {
  BASE = '/Reservation',
}

export const timeSlotInputSchema = z.object({
  time: z.string().min(1, 'Please select one of an available time slot'),
  date: z.string().min(1, 'Please select one of an available date slot'),
});

export type timeSlotInput = z.infer<typeof timeSlotInputSchema>;
export type timeSlotInputErrorMessage = {
  [x in keyof timeSlotInput]?: string[] | undefined;
};

export function timeSlotNotValid(data: timeSlotInput) {
  return formIsNotValid(timeSlotInputSchema, data);
}

async function updateReservationApi(data: resvervationInput) {
  const response = await api.put(`${reservationControler.BASE}`, data);
  return response;
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
      toast.success('Reservation was re-schedule successfuly');
    },
    onError: (err: Error) => {
      toast.error(`Error while re-schedule the reservation,${err.message}`);
    },
  });

  return { updateReservation, isPending };
}

export { useUpdateReservation };
