import { errorToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';

enum createNewMessageController {
  BASE = '/Ticket',
}

export type messageRequestBodyType = {
  ticketId: number | string | undefined;
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
  try {
    const response = await api.post(
      `${createNewMessageController.BASE}/${consultaionId}/Message`,
      data,
    );
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

function useCreateNewMessage() {
  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: createNewMessageApi,
    onError: (err) => {
      errorToast(err.message);
    },
  });
  return { sendMessage, isPending };
}

export { useCreateNewMessage };
