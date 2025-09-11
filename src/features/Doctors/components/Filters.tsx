import FilterInput from '@/components/ui/inputs/FilterInput';
import Selector from '@/components/ui/inputs/Selector';
import DoctorFilterSketon from '@/components/skeleton/doctor/DoctorFilterSketon.tsx';
import AnimateUpEffect from '@/lib/Animation/AnimateUpEffect';
import StarRating from '@/components/ui/doctor/StarRating.tsx';

import { useGetAllSppecialities } from '../api/get-doctor';
import {
  userDoctorsFilter,
  intialValues,
} from '@/context/doctor/DoctorsFilterProvider';
import { useGeolocation } from '@/hooks/useGeolocation';
import Loader from '@/components/ui/loader/Loader';
import { useEffect } from 'react';
import { useUrlPosition } from '@/hooks/useUrlPosition';

export default function Filters() {
  const { filters, setFilters } = userDoctorsFilter();
  const { Specialities, isPending } = useGetAllSppecialities();
  const { isLoading, getPosition, position, setSearchParams } =
    useGeolocation();
  const { lat, lng } = useUrlPosition();

  async function handleTrackLocation(isTrack: boolean) {
    if (isTrack) {
      await getPosition();
      // setFilters((lastValues) => ({
      //   ...lastValues,
      //   ShortestDistanceFirst: true,
      //   lat: Number(lat),
      //   lon: Number(lng),
      // }));
    } else {
      // setFilters((lastValues) => ({
      //   ...lastValues,
      //   ShortestDistanceFirst: false,
      //   lat: null,
      //   lon: null,
      // }));
      setSearchParams({});
    }
  }

  useEffect(() => {
    if (lng) {
      setFilters((lastValues) => ({
        ...lastValues,
        ShortestDistanceFirst: true,
        lat: Number(lat),
        lon: Number(lng),
      }));
    } else {
      setFilters((lastValues) => ({
        ...lastValues,
        ShortestDistanceFirst: false,
        lat: null,
        lon: null,
      }));
    }
  }, [lat, lng]);

  function hanelRestFields() {
    setFilters((lastValues) => ({
      ...intialValues,
      name: lastValues.name,
    }));
  }

  useEffect(() => {
    // Set intial value to SpecialtyId because this field is required
    if (
      Specialities &&
      Specialities?.length !== 0 &&
      !isPending &&
      !filters.SpecialtyId
    ) {
      setFilters((lastValues) => ({
        ...lastValues,
        SpecialtyId: Specialities[0]?.id,
      }));
    }
  }, [Specialities, filters.SpecialtyId]);

  // Hidden the filters list if the useer using search input
  if (filters.name) return null;

  return (
    <>
      {isLoading && (
        <Loader variant="bars" className="text-primary" size={80} />
      )}
      <AnimateUpEffect className="hover:h-fit hover:overflow-visible rounded-box lg:w-1/3 space-y-5 py-3 lg:py-8 h-[8%] overflow-hidden lg:h-fit">
        {isPending ? (
          <DoctorFilterSketon />
        ) : (
          <>
            <h1 className="flex justify-between text-xl font-bold items-center">
              Filters
              <span
                className="font-normal text-sm text-primary cursor-pointer"
                onClick={hanelRestFields}
              >
                Clear All
              </span>
            </h1>
            <FilterInput label="Speciality">
              <Selector
                options={
                  Specialities?.map((speciality) => {
                    return speciality.speciality;
                  }) || []
                }
                anotherValues={
                  Specialities?.map((speciality) => {
                    return speciality.id;
                  }) || []
                }
                value={filters.SpecialtyId}
                onChange={(e: any) =>
                  setFilters((lastValues) => ({
                    ...lastValues,
                    SpecialtyId: e.target.value,
                  }))
                }
                overWriteStyle="border-none text-primary"
              />
            </FilterInput>

            <FilterInput label="Gender">
              <Selector
                options={['all', 'male', 'female']}
                anotherValues={[null, 'male', 'female']}
                value={filters.gender || 'all'}
                onChange={(e: any) =>
                  setFilters((lastValues) => {
                    return {
                      ...lastValues,
                      gender: e.target.value == 'all' ? null : e.target.value,
                    };
                  })
                }
                overWriteStyle="border-none text-primary"
              />
            </FilterInput>

            <div className="flex flex-col items-center w-full">
              <label
                htmlFor=""
                className="font-medium text-lg flex justify-between items-center mb-3 w-full"
              >
                Cost
                <span className="font-bold text-primary">
                  {filters.cost == null ? 'Free' : `${filters.cost}$`}
                </span>
              </label>
              <input
                type="range"
                min="0"
                max="1000"
                className="w-full"
                value={filters.cost || 0}
                onChange={(e) =>
                  setFilters((lastValues) => ({
                    ...lastValues,
                    cost:
                      Number(e.target.value) == 0
                        ? null
                        : Number(e.target.value),
                  }))
                }
              />
            </div>

            <FilterInput label="Rate">
              <StarRating size={25} />
            </FilterInput>

            <FilterInput
              label="Shortest distance"
              overWriteStyle="flex-row justify-between items-center"
            >
              <div className="flex items-center justify-between w-fit">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer outline-none"
                    checked={filters.ShortestDistanceFirst}
                    onChange={(e) => handleTrackLocation(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none  rounded-full peer dark:bg-secondary peer-checked:bg-primary "></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
                </label>
              </div>
            </FilterInput>
          </>
        )}
      </AnimateUpEffect>
    </>
  );
}
