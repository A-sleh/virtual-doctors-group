import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { ProfileControler } from './get-profile-info';
import { successToast } from '@/components/custom/toast';

async function updateDoctorDescriptionApi(newDescription: string) {
  const response = await api.put(
    `${ProfileControler.BASE}?description=${newDescription}`,
  );
  return response;
}

function useUpdateDoctorDescription() {
  const { mutate: updateDoctorDescription, isPending } = useMutation({
    mutationFn: updateDoctorDescriptionApi,
    onSuccess: () => {
      successToast('Your description was updated');
    },
    onError: () => {
      successToast('Some thing went wrong, Please try again ');
    },
  });
  return { updateDoctorDescription, isPending };
}

export { useUpdateDoctorDescription };
