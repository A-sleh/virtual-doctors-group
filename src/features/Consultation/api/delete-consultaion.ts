import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
enum deleteConsultaionControler {
  BASE = '/Ticket',
}

async function deleteConsultaionAPI(consultaionId: number) {
  const response = await api.delete(
    `${deleteConsultaionControler.BASE}/${consultaionId}`,
  );
  return response;
}

function useDeleteConsultaion() {
  const { mutate: deleteConsultaion, isPending } = useMutation({
    mutationFn: deleteConsultaionAPI,
    onSuccess: () => {
      successToast('Consultaion was deleted');
    },
    onError: () => {
      errorToast('Consultaion was not deleted, please try again');
    },
  });

  return { deleteConsultaion, isPending };
}

export { useDeleteConsultaion };
