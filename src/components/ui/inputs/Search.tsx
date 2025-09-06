import { userDoctorsFilter } from '@/context/doctor/DoctorsFilterProvider';

type SearchProps = {
  placeHolder?: string;
};

export default function Search({ placeHolder = '' }: SearchProps) {
  const { filters, setFilters } = userDoctorsFilter();

  return (
    <div className="relative bg-gray-200 rounded-md text-sm font-medium">
      <input
        value={filters.name}
        type="search"
        placeholder={placeHolder}
        onChange={(e) => setFilters(lastValues => ({...lastValues,name: e.target.value}))}
        className="p-2 text-black w-full outline-none"
      />
      <input
        type="submit"
        value="Search"
        className="absolute top-0 right-0 h-full px-8 bg-primary rounded-md text-white"
      />
    </div>
  );
}
