import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';

type ISpecialitiesResponse = {
  id: number;
  speciality: string;
};

async function getAllSpecialitiesApi() {
  const res = await api.get<unknown, ISpecialitiesResponse[]>(`Speciality`);
  return res;
}

function useGetAllSppecialities() {
  const { data: Specialities, isPending } = useQuery({
    queryKey: [QYERY_KEYS.doctor.speciality],
    queryFn: getAllSpecialitiesApi,
  });
  return { Specialities, isPending };
}

export { useGetAllSppecialities };
