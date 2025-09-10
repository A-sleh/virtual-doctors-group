
import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';

import { errorToast, successToast } from '@/components/custom/toast';
import { resvervationInput } from '@/features/patient_Features/Reservation/api/create-reservation';

enum doctorReservationControler {
  BASE = '/Reservation/Revision',
}

async function makeUserRevisionApi(data: resvervationInput) {
  const response = await api.post(`${doctorReservationControler.BASE}`, data);
  return response;
}


function useMakeUserRevision() {
  const { mutate: makeRevision, isPending } = useMutation<
    unknown,
    Error,
    resvervationInput,
    unknown
  >({
    mutationFn: makeUserRevisionApi,
    onSuccess: () => {
      successToast('Revision was schedule successfuly');
    },
    onError: (err: Error) => {
      errorToast(`Error while revision ,${err.message}`);
    },
  });

  return { makeRevision, isPending };
}

export { useMakeUserRevision  };
