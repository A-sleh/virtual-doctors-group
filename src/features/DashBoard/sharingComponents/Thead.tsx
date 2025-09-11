import { FaSort } from "react-icons/fa6";
import { columns } from "../types/dashboard";

export function Thead({columnFour , columnFive} : columns){
  return(
    <thead >
      <td className='thead'>Name <span className="inline-block text-sm"><FaSort /></span> </td>
      <td className='thead'>Phone</td>
      <td className='thead'>Email</td>
      <td className='thead'>{columnFour}</td>
      <td className='thead'>{columnFive} <span className="inline-block text-sm"><FaSort /></span> </td>
      <td></td>
    </thead>
  )
}



