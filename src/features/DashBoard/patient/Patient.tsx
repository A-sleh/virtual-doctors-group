import { useState } from 'react';
import { Search } from '../sharingComponents/Search';
import { Btn } from '../sharingComponents/Btn';
import { FaPen, FaSort } from 'react-icons/fa6';
import { TiDelete } from 'react-icons/ti';
import { patirntTable } from '../types/dashboard';
import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';

import { api } from '@/lib/api-client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Loader from '@/components/ui/loader/Loader';
import ConfirmModel from '@/components/models/ConfirmModel';
import { errorToast, successToast } from '@/components/custom/toast';

// const patients: {
//     image: string;
//     name: string;
//     age: number;
//     email: string;
//     hisDoctor: string;
//     dateOfReservation: string;
//     cost: number;

// }[] = [
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     age: 22,
//     email: "engabooda22@gmail",
//     hisDoctor: "Ahmed",
//     dateOfReservation: "Tomorrow",
//     cost: 300,
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     age: 22,
//     email: "engabooda22@gmail",
//     hisDoctor: "Ahmed",
//     dateOfReservation: "10 Sep 2025",
//     cost: 200,
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     age: 22,
//     email: "engabooda22@gmail",
//     hisDoctor: "Ahmed",
//     dateOfReservation: "15 Sep 2025",
//     cost: 1000,
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Abdulla Zain",
//     age: 22,
//     email: "engabooda22@gmail",
//     hisDoctor: "Omar",
//     dateOfReservation: "15 Sep 2025",
//     cost: 1000,
//   },

// ]

export default function Patient() {
  const [query, setQuery] = useState('');
  return (
    <div className="mr-3">
      <Search nameOfSearch="Patient" query={query} setQuery={setQuery} />
      <TableDoctors query={query} />
    </div>
  );
}

async function getPatient() {
  const data = await api.get(`/User?page=1&limit=20`);
  return data;
}

async function deleteDoctorApi(doctorId: number) {
  const data = await api.delete(`/User/${doctorId}`);
  return data;
}

function TableDoctors({ query }) {
  const { data, isPending } = useQuery({
    queryFn: getPatient,
    queryKey: ['all-patent'],
  });

  if (isPending) return <Loader size={50} />;

  const dataOfPatient = data
    ?.filter((f) => f.role == 'User')
    .filter((f) =>
      `${f.firstName} ${f.lastName}`.toLocaleLowerCase().includes(query),
    );

  return (
    <div className="bg-white m-2 w-full rounded-sm h-[75vh]">
      <h1 className="p-3 m-2 font-medium text-lg">List of patients</h1>
      <AnimateFromToRightInView duration={1}>
        <table className="w-full font-medium">
          <thead>
            <td className="thead">
              Name{' '}
              <span className="inline-block text-sm">
                <FaSort />
              </span>{' '}
            </td>
            <td className="thead">
              Birth date{' '}
              <span className="inline-block text-sm">
                <FaSort />
              </span>
            </td>
            <td className="thead">Phone</td>
            <td className="thead">Email</td>
            <td className="thead">
              Joining date{' '}
              <span className="inline-block text-sm">
                <FaSort />
              </span>
            </td>
            <td></td>
          </thead>

          {dataOfPatient?.map((patient, x) => (
            <Tr
              x={++x}
              background={x % 2 === 1 ? 'bg-gray-100' : 'bg-white'}
              image={'/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg'}
              name={patient.firstName + ' ' + patient.lastName}
              birthDate={'15 Oct 2025'}
              phone={patient.phone}
              email={patient.email}
              joiningDate={'15 Oct 2025'}
              key={patient.userId}
              id={patient.userId}
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
  id,
  image,
  name,
  birthDate,
  phone,
  email,
  joiningDate,
}: patirntTable) {
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
      <td className="py-2 px-4 text-secondary">{birthDate}</td>
      <td className="py-2 px-4 text-secondary">{phone}</td>
      <td className="py-2 px-4 text-primary">{email}</td>
      <td className="py-2 px-4 text-secondary">{joiningDate}</td>
      <td className="py-2 px-4 flex items-center">
        <span className="text-danger text-2xl mr-2 cursor-pointer inline-block">
          <ConfirmModel
            openKey="delete-pat"
            description="Are you sour you want to remove this user"
            onConfirmClick={() =>
              deleteDoctor(id, {
                onSuccess: () => {
                  queryCli.invalidateQueries({
                    queryKey: ['all-patent'],
                  });
                  successToast('The user was deleted');
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
