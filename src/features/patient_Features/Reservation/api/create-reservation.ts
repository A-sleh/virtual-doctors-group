import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import z from 'zod';
import { errorToast, successToast } from '@/components/custom/toast';

enum reservationControler {
  BASE = '/Reservation/Preview',
}

export const resvervationInputSchema = z.object({
  scheduledAt: z.string().optional(),
  userId: z.number(),
  virtualId: z.number(),
  text: z
    .string()
    .min(1, 'Please enter a short message to tell a doctor about your status'),
});

export type resvervationInput = z.infer<typeof resvervationInputSchema>;
export type resvervationInputErrorMessages = {
  [x in keyof resvervationInput]?: string[] | undefined;
};

async function createReservationApi(data: resvervationInput) {
  try {
    const response = await api.post(`${reservationControler.BASE}`, data);
    return response;
  } catch (er) {
    throw new Error(er.response.data);
  }
}

function useCreateReservation() {
  const { mutate: createReservation, isPending } = useMutation<
    unknown,
    Error,
    resvervationInput,
    unknown
  >({
    mutationFn: createReservationApi,
    onSuccess: () => {
      successToast('Reservation was created successfuly');
    },
    onError: (err: Error) => {
      errorToast(err.message);
    },
  });

  return { createReservation, isPending };
}

export { useCreateReservation };
