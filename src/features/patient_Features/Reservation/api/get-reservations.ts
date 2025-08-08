import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';

enum reservationControler {
  BASE = '/Reservation/User',
}

async function getReservations(patientId: number) {
  const response = await api.get(`${reservationControler.BASE}/${patientId}`);
  return response;
}

function useGetReservation(patientId: number) {
  const { data: reservations, isLoading } = useQuery({
    queryKey: [QYERY_KEYS.patient.Reservations],
    queryFn: async () => getReservations(patientId),
  });

  return { reservations, isLoading };
}

export { useGetReservation };
