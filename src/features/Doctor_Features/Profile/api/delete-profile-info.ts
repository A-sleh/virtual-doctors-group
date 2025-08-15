import { api } from '@/lib/api-client';
import { ProfileControler } from './get-profile-info';
import { useMutation } from '@tanstack/react-query';
import { errorToast, successToast } from '@/components/custom/toast';

async function deleteWorkTimeApi(workTimeId: number) {
  const res = await api.delete(
    `${ProfileControler.CLINIC_BASE}/Worktime/${workTimeId}`,
  );
  return res;
}

function useDeleteWorkTime() {
  const { mutate: deleteWorkTime, isPending } = useMutation({
    mutationFn: deleteWorkTimeApi,
    onSuccess: () => {
      successToast('The work time was deleted');
    },
    onError: () => {
      errorToast('Some thing went wrong, Please try again');
    },
  });

  return { deleteWorkTime, isPending };
}

export { useDeleteWorkTime };
