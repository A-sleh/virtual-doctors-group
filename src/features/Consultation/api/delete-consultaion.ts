import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
enum deleteConsultaionControler {
  BASE = '/Ticket',
}

async function deleteConsultaionAPI(consultaionId: number) {
  try {
    const response = await api.delete(
      `${deleteConsultaionControler.BASE}/${consultaionId}`,
    );
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

function useDeleteConsultaion() {
  const { mutate: deleteConsultaion, isPending } = useMutation({
    mutationFn: deleteConsultaionAPI,
    onSuccess: () => {
      successToast('Consultaion was deleted');
    },
    onError: (err) => {
      errorToast(err.message);
    },
  });

  return { deleteConsultaion, isPending };
}

export { useDeleteConsultaion };
