import { api } from '@/lib/api-client';
import { useMutation } from '@tanstack/react-query';
import { IClinicDetailsResponse, ProfileControler } from './get-profile-info';
import { errorToast, successToast } from '@/components/custom/toast';

export type conslutaionType = {
  ticketCost: number;
  ticketOption: 'Any' | 'None' | 'Request';
};

async function updateDoctorConsultaion(body: conslutaionType) {
  try {
    const response = await api.put(`${ProfileControler.CLINIC_SETTING}`, body);
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

async function updateDoctorDescriptionApi(newDescription: string) {
  try {
    const response = await api.put(
      `${ProfileControler.BASE}?description=${newDescription}`,
    );
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

async function updateClinicInfoApi(body: IClinicDetailsResponse) {
  try {
    const response = await api.put(`${ProfileControler.CLINIC_BASE}`, body);
    return response;
  } catch (err) {
    throw new Error(err.response.data);
  }
}

function useUpdateClinicInfo() {
  const { mutate: updateClinicInfo, isPending } = useMutation({
    mutationFn: updateClinicInfoApi,
    onSuccess: () => {
      successToast('Your clinic information was updated');
    },
    onError: (err) => {
      successToast(`Some thing went wrong, Please try again, ${err.message}`);
    },
  });
  return { updateClinicInfo, isPending };
}

function useUpdateDoctorConsultaion() {
  const {
    mutate: updateConsultaionStatus,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: updateDoctorConsultaion,
    onSuccess: () => {
      successToast('Consultaion inforamtion was updated');
    },
    onError: (err) => {
      errorToast(`Some thing went wrong, Please try again, ${err.message}`);
    },
  });
  return { updateConsultaionStatus, isPending, isSuccess };
}

function useUpdateDoctorDescription() {
  const { mutate: updateDoctorDescription, isPending } = useMutation({
    mutationFn: updateDoctorDescriptionApi,
    onSuccess: () => {
      successToast('Your description was updated');
    },
    onError: (err) => {
      successToast(`Some thing went wrong, Please try again, ${err.message}`);
    },
  });
  return { updateDoctorDescription, isPending };
}

export {
  useUpdateDoctorDescription,
  useUpdateClinicInfo,
  useUpdateDoctorConsultaion,
};
