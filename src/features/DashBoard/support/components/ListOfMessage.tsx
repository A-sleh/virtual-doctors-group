import { Notification } from "./Notification"
import { IoCaretBackOutline } from "react-icons/io5";
import { api } from "@/lib/api-client";

import { useQuery } from "@tanstack/react-query";
import { AnimateFromToRightInView } from "@/lib/Animation/AnimateFromLeftToRight";
import { getTimeFromDate } from "@/utils";


export async function getMessage(){
  
  const data = await api.get(`/Support/GetSupportMessages?page=1&pageSize=20`);
  return data;
}

export function ListOfMessage() {

  const {data,isPending} = useQuery({
            queryFn: getMessage,
            queryKey: ['all-message'],
          })

          if(isPending) return  null
        
          
          const massage = data.data;

          console.log(massage)


  return (
    <div className="w-1/2 h-[85vh] bg-white rounded-lg">
      <div className="text-white text-2xl font-bold bg-primary px-4 py-3 rounded-t-lg flex items-center"><h1 >All </h1><button className="-rotate-90 ml-1"><IoCaretBackOutline /></button></div>
      <ul className="max-h-10/12 overflow-y-scroll">
        {massage?.map((m) =>(
          <AnimateFromToRightInView duration={1}>
          <Notification 
          name={m.userFullName}  
          image="/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg"
          time={getTimeFromDate(new Date(m.sentAt))}
          msg="The app needs some modifications such as alifjo kfan kjdsak kjsa  kakkk ii ..."
          key={m.id}
          />
          </AnimateFromToRightInView>))}
      </ul>
    </div>
  )
}