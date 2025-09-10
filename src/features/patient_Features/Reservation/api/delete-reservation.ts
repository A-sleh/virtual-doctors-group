import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';

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
      successToast('Reservation was deleted');
    },
    onError: () => {
      errorToast('Reservation was not deleted, please try again');
    },
  });

  return { deleteReservation, isPending };
}

export { useDeleteReservation };
