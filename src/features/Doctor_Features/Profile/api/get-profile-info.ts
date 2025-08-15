import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { useQuery } from '@tanstack/react-query';
import { WroktimeBodyReq } from './create-profile-info';

export enum ProfileControler {
  BASE = '/Doctor',
  CLINIC_BASE = '/Clinic',
}

export type IDoctorInfoResponse = {
  doctorId: number;
  specialityId: number;
  speciality: string;
  description: string;
  firstName: string;
  lastName: string;
  phone: string;
};

export type IDoctorClinicsResponse = {
  id: number;
  name: string;
  doctorId: number;
  status: string;
  location: string;
  previewCost: number;
  startWorkHours: string;
  endWorkHours: string;
};

export type IClinicDetailsResponse = {
  id: 0;
  name: string;
  status: string;
  avgService: number;
  location: string;
  locationCoords: string;
  previewCost: number;
  holidays: string[];
};

async function getDoctorInfoApi(doctorId: number) {
  const response = await api.get<unknown, IDoctorInfoResponse>(
    `${ProfileControler.BASE}/${doctorId}`,
  );
  return response;
}

async function getDoctorClinicsApi(doctorId: number) {
  const response = await api.get<unknown, IDoctorClinicsResponse[]>(
    `${ProfileControler.CLINIC_BASE}/Doctor/${doctorId}`,
  );
  return response;
}

async function getClinicWorkingHoursApi(clinicId: number) {
  const response = await api.get<unknown, WroktimeBodyReq[]>(
    `${ProfileControler.CLINIC_BASE}/${clinicId}/Worktimes`,
  );
  return response;
}

async function getClinicDetailsApi(clinicId: number) {
  const response = await api.get<unknown, IClinicDetailsResponse>(
    `${ProfileControler.CLINIC_BASE}/${clinicId}`,
  );
  return response;
}

function useGetDoctorClinics(doctorId: number) {
  const { data: doctorClinics, isPending } = useQuery<
    unknown,
    Error,
    IDoctorClinicsResponse[]
  >({
    queryFn: async () => getDoctorClinicsApi(doctorId),
    queryKey: [QYERY_KEYS.doctor.clinics],
  });
  return { doctorClinics, isPending };
}

function useGetDoctorInfo(doctorId: number) {
  const { data: doctorInfo, isPending } = useQuery<
    unknown,
    Error,
    IDoctorInfoResponse
  >({
    queryFn: async () => getDoctorInfoApi(doctorId),
    queryKey: [QYERY_KEYS.doctor.info],
  });
  return { doctorInfo, isPending };
}

function useGetClinicWorkingTimes(clinicId: number) {
  const { data: workingTimes, isPending } = useQuery<
    unknown,
    Error,
    WroktimeBodyReq[]
  >({
    queryFn: async () => getClinicWorkingHoursApi(clinicId),
    queryKey: [QYERY_KEYS.doctor.clinicTimes],
  });
  return { workingTimes, isPending };
}

function useGetClinicDetails(clinicId: number) {
  const { data: clinicDetails, isPending } = useQuery<
    unknown,
    Error,
    IClinicDetailsResponse
  >({
    queryFn: async () => getClinicDetailsApi(clinicId),
    queryKey: [QYERY_KEYS.doctor.clinicDetails],
  });
  return { clinicDetails, isPending };
}

export {
  useGetDoctorInfo,
  useGetDoctorClinics,
  useGetClinicWorkingTimes,
  useGetClinicDetails,
};
