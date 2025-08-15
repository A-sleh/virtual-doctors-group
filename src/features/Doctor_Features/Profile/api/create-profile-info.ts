import { successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';

enum profileController {
  CLINIC_BASE = '/Clinic',
}

export type WroktimeBodyReq = {
  clinicId: number;
  startWorkHours: string;
  endWorkHours: string;
  id: number;
};

async function addNewWrokHoursApi(data: WroktimeBodyReq) {
  const response = await api.post(
    `${profileController.CLINIC_BASE}/Worktime`,
    data,
  );
  return response;
}

function useAddNewWorkHours() {
  const { mutate: addNewWorkHours, isPaused } = useMutation({
    mutationFn: addNewWrokHoursApi,
    onSuccess: () => {
      successToast('The work time was added');
    },
    onError: () => {
      successToast('Some thing went wron, Please try again');
    },
  });
  return { addNewWorkHours, isPaused };
}

export { useAddNewWorkHours };
