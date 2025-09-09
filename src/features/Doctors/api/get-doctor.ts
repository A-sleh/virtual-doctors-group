import { FiltersType } from '@/context/doctor/DoctorsFilterProvider';
import { api } from '@/lib/api-client';
import { QYERY_KEYS } from '@/lib/query-key';
import { Meta } from '@/types/api';
import {
  useQuery,
  infiniteQueryOptions,
  useInfiniteQuery,
} from '@tanstack/react-query';

type Clinic = {
  clinicId: number;
  clinicName: string;
  location: string;
};

export type IDoctorInfo = {
  doctorId: number;
  doctorName: string;
  doctorDescription: string;
  ticketOption: string;
  ticketCost: number;
  rating: number;
  shortestDistanceClinic: string;
  shortestDistanceLocation: string;
  clinics: Clinic[];
};

type SearchDoctorsResponse = {
  data: IDoctorInfo[];
} & Meta;

type ISpecialitiesResponse = {
  id: number;
  speciality: string;
};

enum doctorsController {
  SPECIALITY = '/Speciality',
  FILTRED_DOCTORS = '/Doctor/GetFilteredDoctors',
  GET_DOCTOR_BY_NAME = '/Doctor/GetByName'
}

async function getAllSpecialitiesApi() {
  const res = await api.get<unknown, ISpecialitiesResponse[]>(
    `${doctorsController.SPECIALITY}`,
  );
  return res;
}

function useGetAllSppecialities() {
  const { data: Specialities, isPending } = useQuery({
    queryKey: [QYERY_KEYS.doctor.speciality],
    queryFn: getAllSpecialitiesApi,
  });
  return { Specialities, isPending };
}

const getDoctorsApi = ({
  filters,
  pageSize = 10,
  page = 1,
}: {
  filters: FiltersType;
  pageSize?: number;
  page?: number;
}): Promise<SearchDoctorsResponse> => {

  const params = filters.name != '' ? {name: filters.name} : {...filters,name: null}

  return api.get(`${filters.name != '' ? doctorsController.GET_DOCTOR_BY_NAME : doctorsController.FILTRED_DOCTORS}`, {
    params: {
      pageSize,
      page,
      ...params,
    },
  });
};

const getInfiniteCommentsQueryOptions = (filters: FiltersType) => {
  return infiniteQueryOptions({
    queryKey: [QYERY_KEYS.doctors,JSON.stringify(filters)],
    queryFn: ({ pageParam = 1 }) => {
      return getDoctorsApi({ filters, page: pageParam as number });
    },
    getNextPageParam: (lastPage) => {
      if (lastPage?.page === lastPage?.totalPages) return undefined;
      const nextPage = lastPage.page + 1;
      return nextPage;
    },
    initialPageParam: 1,
  });
};

const useInfiniteDoctors = (filters: FiltersType) => {
  // Because this filter field is required
  if (!filters.SpecialtyId)
    return { isLoading: true, data: [], hasNextPage: false,fetchNextPage: null,isFetchingNextPage: false };

  return useInfiniteQuery({
    ...getInfiniteCommentsQueryOptions(filters),
  }) ;
};

export { useGetAllSppecialities, useInfiniteDoctors };


