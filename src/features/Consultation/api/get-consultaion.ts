import { api } from '@/lib/api-client';
import { ConsultaionController } from './update-consultaion';
import { useQuery } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';

export type IGetConsultaionsResponse = {
  userName: string;
  doctorName: string;
  text: string;
  id: number;
  userId: number;
  doctorId: number;
  status: 'Opened' | 'Closed' | 'Pending' | undefined;
  closeDate: Date;
  openDate: Date;
  specility: string;
};

async function getConsultaionsApi(
  userId: number,
  userPermission: 'Doctor' | 'User',
) {
  const response = await api.get<unknown, IGetConsultaionsResponse[]>(
    `${ConsultaionController.BASE}/${userPermission}/${userId}`,
  );
  return response;
}

function useGetConsultaions(userId: number, userPermission: 'Doctor' | 'User') {
  const { data: consultaions, isLoading } = useQuery({
    queryKey: [QYERY_KEYS.consultaions],
    queryFn: async () => getConsultaionsApi(userId, userPermission),
  });

  return { consultaions, isLoading };
}

export { useGetConsultaions };
