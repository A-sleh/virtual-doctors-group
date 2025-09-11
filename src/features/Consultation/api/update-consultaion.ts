import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';

export enum ConsultaionController {
  BASE = '/Ticket',
}

type updateConsultaionType = {
  consultId: number;
  changeStatusTo: 'Accept' | 'Reject' | 'Close';
};

async function updateConsultaionApi({
  consultId,
  changeStatusTo,
}: updateConsultaionType) {
  try {
    const response = await api.put(
      `${ConsultaionController.BASE}/${consultId}/${changeStatusTo}`,
    );

    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

function useUpdateConsultaion() {
  const { mutate: updateConsultaionState, isPending } = useMutation<
    unknown,
    Error,
    updateConsultaionType,
    unknown
  >({
    mutationFn: updateConsultaionApi,
    onSuccess: () => {
      successToast('The status of the consultaion was changed');
    },
    onError: (err) => {
      errorToast(err.message);
    },
  });

  return { updateConsultaionState, isPending };
}

export { useUpdateConsultaion };
