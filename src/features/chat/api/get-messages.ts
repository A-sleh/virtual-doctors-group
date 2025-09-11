import { useQuery } from '@tanstack/react-query';
import { QYERY_KEYS } from '@/lib/query-key';
import { api } from '@/lib/api-client';

enum getConsultaionMessagesController {
  BASE = '/Ticket',
}

async function getConsultaionMessagesApi(consultaionId: number | string) {
  const response = await api.get(
    `${getConsultaionMessagesController.BASE}/${consultaionId}/Messages`,
  );
  return response;
}

function useGetConsultaionMessage(consultaionId: number | string) {
  const { data: consultaionMessages, isPending } = useQuery({
    queryKey: [QYERY_KEYS.consultaionMessages,consultaionId],
    queryFn: async () => getConsultaionMessagesApi(consultaionId),
    refetchInterval: 2000,
  });
  return { consultaionMessages, isPending };
}

export { useGetConsultaionMessage };
