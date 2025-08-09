import { errorToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';

enum createNewMessageController {
  BASE = '/Ticket',
}

type messageRequestBodyType = {
  ticketId: number | string;
  text: string;
  ownerId: number;
  date: Date;
};

async function createNewMessageApi({
  consultaionId,
  data,
}: {
  consultaionId: number | string;
  data: messageRequestBodyType;
}) {
  const response = await api.post(
    `${createNewMessageController.BASE}/${consultaionId}/Message`,
    data,
  );
  return response;
}

function useCreateNewMessage() {
  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: createNewMessageApi,
    onError: () => {
      errorToast('You are offline');
    },
  });
  return { sendMessage, isPending };
}

export { useCreateNewMessage };
