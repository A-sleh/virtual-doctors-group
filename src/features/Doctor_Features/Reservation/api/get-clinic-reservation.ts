import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';

enum reservationControler {
  BASE = '/Reservation/Clinic',
}

type ICalendarResponse = {
  day: Date;
  busynessPercent: number;
};

type IClinicReservationResponse = {
  userId: 0;
  text: string;
  scheduledAt: string;
  type: string;
  status: string;
  user: {
    firstName: string;
    lastName: string;
  };
};

async function getCalendarDays(clinicId: number, date: string) {
  const response = await api.get<unknown, ICalendarResponse[]>(
    `${reservationControler.BASE}/${clinicId}/MonthBusyness?date=${date}`,
  );
  return response;
}

async function getClinicReservations(clinicId: number, date: string) {
  const response = await api.get<unknown, IClinicReservationResponse[]>(
    `${reservationControler.BASE}/${clinicId}`,
    {
      params: {
        date,
      },
    },
  );
  return response;
}

function useGetCalendarDays(clinicId: number, date: string) {
  const { data: calendarDays, isLoading } = useQuery({
    queryKey: [QYERY_KEYS.doctor.calendarDays, clinicId, date],
    queryFn: async () => getCalendarDays(clinicId, date),
    enabled: clinicId != undefined && date != undefined,
  });

  return { calendarDays, isLoading };
}
function useGetReservation(clinicId: number, date: string) {
  const { data: clinicReservations, isLoading } = useQuery({
    queryKey: [QYERY_KEYS.doctor.Reservations, clinicId, date],
    queryFn: async () => getClinicReservations(clinicId, date),
  });

  return { clinicReservations, isLoading };
}

export { useGetReservation, useGetCalendarDays };
