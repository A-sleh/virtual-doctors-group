import { successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { formIsNotValid } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import z from 'zod';

enum profileController {
  CLINIC_BASE = '/Clinic',
}

const clinicSchema = z.object({
  name: z.string().min(1, 'Please enter the title of the clinic'),
  avgService: z.string(),
  previewCost: z.string(),
  location: z.string().optional(),
  locationCoords: z.string().optional(),

  startWorkHours: z
    .string()
    .refine(
      (value) => /[0-9][0-9]:[0-9][0-9]/.test(value ?? ''),
      'The pattern most be like 00:00',
    ),
  endWorkHours: z
    .string()
    .refine(
      (value) => /[0-9][0-9]:[0-9][0-9]/.test(value ?? ''),
      'The pattern most be like 00:00',
    ),
  holidays: z.array(z.string()).min(1, 'You should select one day at least'),
});

export type clinicInputsType = z.infer<typeof clinicSchema>;
export type clinicInputsErrorMessages = {
  [z in keyof clinicInputsType]: string[] | undefined;
};

export function newClinicFormIsNotValid(data: clinicInputsType) {
  return formIsNotValid(clinicSchema, data);
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
