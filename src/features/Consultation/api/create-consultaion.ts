import { api } from '@/lib/api-client';
import { formIsNotValid } from '@/utils';
import z from 'zod';
import { ConsultaionController } from './update-consultaion';
import { useMutation } from '@tanstack/react-query';
import { errorToast, successToast } from '@/components/custom/toast';

export const consultaionInputSchema = z.object({
  message: z.string().min(1, 'Please enter the consultaion message'),
  cardName: z.string().min(1, 'Please enter your card name'),
  cardNumber: z.string().min(1, 'Please enter your card number'),
  expirDate: z.string().min(1, 'Please enter the expir date'),
  postalCode: z.string().min(1, 'Please enter the postal code'),
});

export type consultaionInput = z.infer<typeof consultaionInputSchema>;
export type consultaionInputErrorMessage = {
  [x in keyof consultaionInput]?: string[] | undefined;
};
type requestBody = {
  userId: number;
  doctorId: number;
  text: string;
};

export function consultaionFormIsNotValid(data: consultaionInput) {
  return formIsNotValid(consultaionInputSchema, data);
}

async function createNewConsultaionApi(data: requestBody) {
  const reponse = await api.post(`${ConsultaionController.BASE}`, data);
  return reponse;
}

function useCreateNewConsultaion() {
  const { mutate: createNewConsultaion, isPending } = useMutation({
    mutationFn: createNewConsultaionApi,
    onSuccess: () => {
      successToast(
        'The consultaion request was send, Please wait until the doctor to respond',
      );
    },
    onError: () => {
      errorToast('The consultaion request was not send, Please try again ...');
    },
  });
  return { createNewConsultaion, isPending };
}

export { useCreateNewConsultaion };
