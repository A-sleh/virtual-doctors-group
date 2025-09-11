import { useQuery } from "@tanstack/react-query";
import { Form } from "./Form";
import { ListOfReply } from "./ListOfReply";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { getMessage } from "./ListOfMessage";



export function Reply(){

const {data,isPending} = useQuery({
            queryFn: getMessage,
            queryKey: ['all-message'],
          })

          if(isPending) return  null
        
          
          const massage = data.data;

          console.log(massage)

  return(
    <div className="w-1/2 h-[85vh] bg-white rounded-lg">
      <div className="flex text-white text-2xl font-bold bg-primary px-4 py-3 rounded-t-lg items-center">
        <img className="w-8 rounded-full mr-4" src="/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg" alt="" />
        <h1 >{massage[0].userFullName}</h1>
        <span className="ml-auto"><IoArrowBackCircleOutline  className="text-4xl"/></span>
      </div>
      <ul className="my-4 max-h-10/12 overflow-y-scroll">
        <ListOfReply/>
        <Form/>
      </ul>
      
    </div>
  )
}