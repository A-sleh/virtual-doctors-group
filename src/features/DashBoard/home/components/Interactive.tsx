import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import { listDoctors } from '../../types/dashboard';
// import { ArrayNumber } from "./ArrayNumber";
import { api } from '@/lib/api-client';

import { useQuery } from '@tanstack/react-query';

// const ineterActiveDoctors: {
//     image: string;
//     name: string;
//     counterOfMessage: number;
// }[] = [
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     counterOfMessage: 36,
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     counterOfMessage: 26,
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     counterOfMessage: 20,
//   },

// ]

// http://vdg.runasp.net/api/Doctor/GetAll?page=1&pageSize=20

async function getDoctor() {
  const data = await api.get(`/Doctor/GetAll?page=1&pageSize=20`);
  return data;
}

export function Interactive() {
  const { data, isPending } = useQuery({
    queryFn: getDoctor,
    queryKey: ['all-doctors'],
  });

  if (isPending) return null;

  const dataOfDoctors = data;
  const maxItem = 3;
  return (
    <div className="m-2 p-3 bg-white rounded-lg relative">
      <h1 className="font-bold mb-3">The most interactive doctors</h1>
      <ul className="grid gap-y-4">
        {dataOfDoctors?.slice(0, maxItem)?.map((doctor: any) => (
          <AnimateFromToRightInView duration={1}>
            <ListDoctors
              image={'/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg'}
              name={doctor.firstName + ' ' + doctor.lastName}
              counterOfMessage={doctor.doctorId}
              key={doctor.doctorId}
            />
          </AnimateFromToRightInView>
        ))}
      </ul>

      {/* <ArrayNumber sizeOfArray={Math.ceil(dataOfDoctors?.length / 3)} /> */}
    </div>
  );
}

function ListDoctors({ image, name, counterOfMessage }: listDoctors) {
  return (
    <li className="flex p-2 items-center bg-third rounded-full">
      <img className="w-12 rounded-full" src={image} alt="" />
      <div className="ml-6">
        <h4 className="font-bold mb-2">
          <span className="text-primary">Dr.</span>
          {name}
        </h4>
        <p className="text-secondary text-sm">
          <span className="font-bold text-primary">+{counterOfMessage} </span>
          Message per week
        </p>
      </div>
    </li>
  );
}
