import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';

enum reservationControler {
  BASE = '/Reservation/Clinic',
}

async function getClinicReservations(clinicId: number, date: Date) {
  const response = await api.get(
    `${reservationControler.BASE}/${clinicId}?date=${date}`,
  );
  return response;
}

function useGetReservation(clinicId: number, date: Date) {
  const { data: clinicReservations, isLoading } = useQuery({
    queryKey: [QYERY_KEYS.patient.Reservations],
    queryFn: async () => getClinicReservations(clinicId, date),
  });

  return { clinicReservations, isLoading };
}

export { useGetReservation };
