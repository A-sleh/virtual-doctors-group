import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';
import z from 'zod';

enum reservationControler {
  BASE = '/Reservation/Revision',
}

export const resvervationInputSchema = z.object({
  scheduledAt: z.date().optional(),
  userId: z.number(),
  virtualId: z.number(),
  text: z
    .string()
    .min(1, 'Please enter a short message to tell a doctor about your status'),
  type: z.number(),
});

export type resvervationInput = z.infer<typeof resvervationInputSchema>;
export type resvervationInputErrorMessages = {
  [x in keyof resvervationInput]?: string[] | undefined;
};

async function createReservationApi(data: resvervationInput) {
  const response = await api.post(`${reservationControler.BASE}`, data);
  return response;
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
      toast.success('Reservation was created successfuly');
    },
    onError: (err: Error) => {
      toast.error(`Error while create a new reservation,${err.message}`);
    },
  });

  return { createReservation, isPending };
}

export { useCreateReservation };
