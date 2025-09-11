import { AnimateFromToRightInView } from "@/lib/Animation/AnimateFromLeftToRight";
import { table } from "../../types/dashboard";
import { Title } from "./Title";

import { api } from "@/lib/api-client";

import { useQuery } from "@tanstack/react-query";
import { paths } from "@/config/paths";

// const lastDoctor: {
//     image: string;
//     name: string;
//     specialization: string;
//     joinedDate: string;
// }[] = [
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     specialization: "Dendist",
//     joinedDate: "Yasterday",
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     specialization: "Blood",
//     joinedDate: "12 Aug 2025",
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     specialization: "Baby",
//     joinedDate: "3 Jul 2025",
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     specialization: "ddd",
//     joinedDate: "5 Jun 2025",
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     specialization: "ddd",
//     joinedDate: "5 Jun 2025",
//   },
  
// ]


export function LastDoctor(){
  return(
    <div className='m-2 bg-white rounded-lg col-span-2'>
      <Title title='Latest doctors' location={paths.app.dashboard.doctor.getHref()} goal="doctors"/>
      <Table/>
    </div>
  )
}

async function getDoctor() {
  
  const data = await api.get(`/Doctor/GetAll?page=1&pageSize=20`);
  return data;
}


function Table(){

  const {data,isPending} = useQuery({
      queryFn: getDoctor,
      queryKey: ['all-doctors'],
    })
  
  
  
    if(isPending) return  null
  
    const dataOfDoctors = data;
    const maxItem = 5;

  return(
    <AnimateFromToRightInView duration={1}>
    <table className='w-full font-medium'>
          <thead >
            <td className='py-2 px-4 text-gray-400'>Name</td>
            <td className='py-2 px-4 text-gray-400'>Specialization</td>
            <td className='py-2 px-4 text-gray-400'>Joining date</td>
          </thead>
          {dataOfDoctors?.slice(0,maxItem).map((doctor , x = 0) => (
              <Tr image={"/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg"}
                  name={doctor.firstName+ " " + doctor.lastName} 
                  specialization={doctor.speciality} 
                  date={"15 Oct 2025"} 
                  background={((x++ % 2 === 0) ? "bg-gray-100" : "bg-white")}
                  key={doctor.doctorId} />
            ))}
          
      </table>
      </AnimateFromToRightInView>
  )
}
function Tr({image , name , specialization, date , background} : table){
  return (
    <tr className={background} >
    
      <td className='py-2 px-4 text-secondary'><img src={image} className='w-7 inline rounded-full mr-4' alt="" />{name}</td>

      <td className='py-2 px-4 text-secondary'>{specialization}</td>
      <td className='py-2 px-4 text-primary'>{date}</td>
    </tr>
  )
}
