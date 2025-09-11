import { useQuery } from "@tanstack/react-query";
import { getMessage } from "./ListOfMessage";
import { getTimeFromDate } from "@/utils";


export function ListOfReply(){

  const {data,isPending} = useQuery({
            queryFn: getMessage,
            queryKey: ['all-message'],
          })

          if(isPending) return  null
          const massage = data.data;


  return (
    <li>
      <div className='mb-4 mx-4 flex items-end '>
        <img src="/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg" className='w-10 rounded-full mr-3' alt="" />
        <div className='border border-gray-300 py-3 px-5 rounded-lg rounded-bl-none bg-gray-100 relative'>
          <p className='text-secondary font-medium'>he app needs some modifications such as alifjo kfan kjdsak iejfoi skngiu kjngiou ignsidu nsdoi
          lsaidjfoisa nkfsal kfamnsl
          </p>
          <span className='w-fit block text-sm text-gray-500 ml-auto'>{getTimeFromDate(new Date(massage[0].sentAt))}</span>
        </div>
      </div>
    </li>
  )
}