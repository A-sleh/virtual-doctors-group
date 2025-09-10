import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';

export enum topDoctorsController {
  BASE = '/Doctor/GetAll'
}

export interface IAllDoctorInfo {
  doctorId: number
  specialityId: number
  speciality: string
  description: string
  ticketOption: string
  ticketCost: number
  userId: number
  email: string
  role: string
  personId: number
  firstName: string
  lastName: string
  phone: string
}


async function getDoctorsApi() {
  const response = await api.get<unknown, IAllDoctorInfo[]>(
    `${topDoctorsController.BASE}?page=1&pageSize=20`,
  );
  return response;
}

function useGetDoctors() {
  const { data: topDoctors, isPending } = useQuery({
    queryFn: getDoctorsApi,
    queryKey: [QYERY_KEYS.topDoctors],
  });
  return { topDoctors, isPending };
}

export { useGetDoctors };
