type SearchProps = {
  placeHolder?: string;
};

export default function Search({ placeHolder = '' }: SearchProps) {
  return (
    <div className="relative bg-gray-200 rounded-md text-sm font-medium">
      <input type="search" placeholder={placeHolder} className="p-2 text-black w-full" />
      <input type="submit" value="Search" className="absolute top-0 right-0 h-full px-8 bg-primary rounded-md text-white"/>
    </div>
  );
}
