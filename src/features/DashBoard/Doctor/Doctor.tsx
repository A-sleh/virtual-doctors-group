// import { dimensionValueTypes } from 'motion/react';
import React, { useState } from 'react';
import { Search } from '../sharingComponents/Search';
import { Thead } from '../sharingComponents/Thead';
import { Btn } from '../sharingComponents/Btn';
import { FaPen } from 'react-icons/fa6';
import { TiDelete } from 'react-icons/ti';
import { doctorTable } from '../types/dashboard';
import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';

import { api } from '@/lib/api-client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import ConfirmModel from '@/components/models/ConfirmModel';
import Loader from '@/components/ui/loader/Loader';
import { errorToast, successToast } from '@/components/custom/toast';

export default function Doctor() {
  const [query, setQuery] = useState('');
  return (
    <div className="mr-3">
      <Search nameOfSearch="Doctors" query={query} setQuery={setQuery} />
      <TableDoctors query={query} />
    </div>
  );
}
// const doctors: {
//     image: string;
//     name: string;
//     age: number;
//     email: string;
//     specialization: string;
//     joiningDate: string;
//     serviceType: string;

// }[] = [
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     age: 22,
//     email: "engabooda22@gmail",
//     specialization: "Dendist",
//     joiningDate: "Yasterday",
//     serviceType: "Close"
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     age: 22,
//     email: "engabooda22@gmail",
//     specialization: "Dendist",
//     joiningDate: "15 Jun 2025",
//     serviceType: "Open"
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     age: 22,
//     email: "engabooda22@gmail",
//     specialization: "Blood",
//     joiningDate: "1 May 2025",
//     serviceType: "Paid"
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     age: 22,
//     email: "engabooda22@gmail",
//     specialization: "Dendist",
//     joiningDate: "15 Apr",
//     serviceType: "Close"
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdoulla Zain",
//     age: 22,
//     email: "engabooda22@gmail",
//     specialization: "Dendist",
//     joiningDate: "15 Apr",
//     serviceType: "Close"
//   },

// ]
async function getDoctor() {
  const data = await api.get(`/Doctor/GetAll?page=1&pageSize=20`);
  return data;
}


async function deleteDoctorApi(doctorId: number) {
  const data = await api.delete(`/Doctor/${doctorId}`);
  return data;
}
function TableDoctors({ query }) {
  const { data, isPending } = useQuery({
    queryFn: getDoctor,
    queryKey: ['all-doctors'],
  });

  if (isPending) return null;

  const dataOfDoctors = data?.filter((f) =>
    `${f.firstName} ${f.lastName}`.toLocaleLowerCase().includes(query),
  );

  return (
    <div className="bg-white m-2 w-full rounded-sm h-[75vh]">
      <h1 className="p-3 m-2 font-medium text-lg">List of doctors</h1>
      <AnimateFromToRightInView duration={1}>
        <table className="w-full font-medium">
          <Thead columnFour="Specialization" columnFive="Joining date" />

          {dataOfDoctors?.map((doctor, x) => (
            <Tr
              x={++x}
              background={x % 2 === 1 ? 'bg-gray-100' : 'bg-white'}
              image={'/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg'}
              name={doctor.firstName + ' ' + doctor.lastName}
              phone={doctor.phone}
              email={doctor.email}
              specialization={doctor.speciality}
              joiningDate={'15 Oct 2025'}
              key={doctor.doctorId}
              id={doctor.doctorId}
            />
          ))}
        </table>
      </AnimateFromToRightInView>
      <Btn />
    </div>
  );
}

function Tr({
  x,
  background,
  image,
  name,
  phone,
  email,
  id,
  specialization,
  joiningDate,
}: doctorTable) {
  const queryCli = useQueryClient();
  const { isPending: docIS, mutate: deleteDoctor } = useMutation({
    mutationFn: deleteDoctorApi,
  });

  if (docIS) return <Loader size={50} />;

  return (
    <tr className={background}>
      <td className="py-2 px-4 text-secondary">
        <span className="mr-4">{x}</span>
        <img src={image} className="w-7 inline rounded-full mr-4" alt="" />
        {name}
      </td>
      <td className="py-2 px-4 text-primary">{phone}</td>
      <td className="py-2 px-4 text-secondary">{email}</td>
      <td className="py-2 px-4 text-secondary">{specialization}</td>
      <td className="py-2 px-4 text-primary">{joiningDate}</td>
      <td className="py-2 px-4 flex items-center">
        <span className="text-danger text-2xl mr-2 cursor-pointer inline-block">
          <ConfirmModel
            openKey="delete-pat"
            description="Are you sour you want to remove this doctor"
            onConfirmClick={() =>
              deleteDoctor(id, {
                onSuccess: () => {
                  queryCli.invalidateQueries({
                    queryKey: ['all-doctors'],
                  });
                  successToast('The doctor was deleted');
                },
                onError: () => {
                  errorToast('Some thing went wrong, try again');
                },
              })
            }
          >
            <TiDelete />
          </ConfirmModel>
        </span>
      </td>
    </tr>
  );
}

// Specialization Joining date Service type
