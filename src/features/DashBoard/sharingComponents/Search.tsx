import { search } from "../types/dashboard";

export function Search({nameOfSearch , query ,setQuery} : search) {
  return(
    <div className='w-full bg-white m-2 p-3 rounded-sm font-medium'>
      <form action="" className='flex justify-between items-center '>
        <input type="text" className='bg-gray-200 w-full py-2 px-5 caret-secondary rounded-l-sm text-secondary'  placeholder={`${nameOfSearch} name...`}
        value={query} 
        onChange={(e) => setQuery(e.target.value)}/>
        <input type="submit" className='text-white bg-primary rounded-r-sm py-2 px-5 cursor-pointer hover:bg-primary-hover transition duration-200' value="Search" />
      </form>
    </div>
  )
}