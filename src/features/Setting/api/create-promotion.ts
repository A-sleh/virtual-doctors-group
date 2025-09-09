import { errorToast, successToast } from '@/components/custom/toast';
import { api } from '@/lib/api-client';
import { formIsNotValid } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { z } from 'zod';

enum doctorSettingController {
  PROMOTION = '/Promotion',
}

export const doctorSettingSchema = z.object({
  syndicateId: z.string().min(1, 'Enter your syndicate Id ...'),
  note: z.string().min(1, 'Enter your syndicate Id ...').optional(),
  specialityId: z.string().min(1, 'Please select your speciality'),
});

export type doctorSettingInputs = z.infer<typeof doctorSettingSchema>;
export type doctorSettingInputsErrorMessages = {
  [x in keyof doctorSettingInputs]?: string[] | undefined;
};

export function doctorSettingFormIsNotValid(data: doctorSettingInputs) {
  return formIsNotValid(doctorSettingSchema, data);
}

async function joinAsDcotorApi(body: doctorSettingInputs) {
  const reponse = await api.post(`${doctorSettingController.PROMOTION}`, body);
  return reponse;
}

function useJoinAsDoctor() {
  const { mutate: joinAsDcotro, isPending } = useMutation({
    mutationFn: joinAsDcotorApi,
    onSuccess: () => {
      successToast(
        'Your request was sended, ckeck your email messages ',
      );
    },
    onError: () => {
      errorToast('Some thing went wron, please try again later ...');
    },
  });
  return { joinAsDcotro, isPending };
}

export { useJoinAsDoctor };
