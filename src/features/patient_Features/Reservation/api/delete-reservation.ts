import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

enum deleteReservationControler {
  BASE = '/Reservation',
}

async function deleteReservationAPI(reservationId: number) {
  const response = await api.delete(
    `${deleteReservationControler.BASE}/${reservationId}`,
  );
  return response;
}

function useDeleteReservation() {
  const { mutate: deleteReservation, isPending } = useMutation({
    mutationFn: deleteReservationAPI,
    onSuccess: () => {
      toast.success('Reservation was deleted');
    },
    onError: () => {
      toast.error('Reservation was not deleted, please try again');
    },
  });

  return { deleteReservation, isPending };
}

export { useDeleteReservation };
