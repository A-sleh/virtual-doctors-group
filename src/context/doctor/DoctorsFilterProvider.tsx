import { withChildProps } from '@/types/api';
import { createContext, useContext, useState } from 'react';

export type FiltersType = {
  name: string  ;
  gender: 'male' | 'female' | null | string;
  cost: number | null;
  minRate: number | null;
  lat: number | null;
  lon: number | null;
  ShortestDistanceFirst: boolean;
  SpecialtyId: number | null;
};

type DoctorsFilterContextType = {
    filters: FiltersType
    setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
};

export const intialValues:FiltersType = {
    name: '',
    gender: null,
    cost: null,
    minRate: null,
    lat: null ,
    lon: null,
    ShortestDistanceFirst: false,
    SpecialtyId: null
}

const DoctorsFilterContext = createContext<DoctorsFilterContextType>(
  {} as DoctorsFilterContextType,
);

function DoctorsFilterProvider({ children }: withChildProps) {
  const [filters, setFilters] = useState<FiltersType>(intialValues);

  return (
    <DoctorsFilterContext.Provider value={{filters,setFilters}}>
      {children}
    </DoctorsFilterContext.Provider>
  );
}

function userDoctorsFilter() {
  const context = useContext(DoctorsFilterContext);
  if (context === undefined) {
    throw new Error('You was used the doctor filter outsid the provider');
  }

  return context;
}

export { DoctorsFilterProvider, userDoctorsFilter };
