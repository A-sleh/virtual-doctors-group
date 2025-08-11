import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';

enum reservationControler {
  BASE = '/Reservation/User',
}

export type IReservationResponse = {
  virtualClinic: {
    id: number;
    name: string;
    doctorId: number;
    doctor: {
      speciality: string;
      firstName: string;
      lastName: string;
    };
  };
  userId: number;
  id: number;
  text: string;
  scheduledAt: string;
};

async function getReservations(
  patientId: number,
): Promise<IReservationResponse[] | []> {
  const response = await api.get<unknown, IReservationResponse[]>(
    `${reservationControler.BASE}/${patientId}`,
  );
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
