import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import { message } from '../../types/dashboard';
import { Title } from './Title';
import { api } from '@/lib/api-client';

import { useQuery } from '@tanstack/react-query';
import { getTimeFromDate } from '@/utils';
import { paths } from '@/config/paths';
// Support/GetSupportMessages?page=1&pageSize=20

// const messages: {
//     image: string;
//     name: string;
//     msg: string;
//     time: string;
// }[] = [
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rerum animi et cupiditate pariatur, officiis odit numquam soluta, laudantium doloribus quae iste dolore tempore quo! Tempore hic consectetur aliquid tenetur.',
//     time: "12:00PM"
//   },
//   {
//     image: "/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg",
//     name: "Hussine Zalt",
//     msg: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rerum animi et cupiditate pariatur, officiis odit numquam soluta, laudantium doloribus quae iste dolore tempore quo! Tempore hic consectetur aliquid tenetur.',
//     time: "1:30PM",
//   },

// ]

async function getMessage() {
  const data = await api.get(`/Support/GetSupportMessages?page=1&pageSize=20`);
  return data;
}

export function Support() {
  const { data, isPending } = useQuery({
    queryFn: getMessage,
    queryKey: ['all-message'],
  });

  if (isPending) return null;

  const massage = data?.data;

  return (
    <div className="m-2 p-3 bg-white rounded-lg col-span-3">
      <Title
        title="Messages from technical support"
        location={paths.app.dashboard.support.getHref()}
        goal="messages"
      />
      {massage?.map((m) => (
        <AnimateFromToRightInView duration={1}>
          <Message
            image="/src/assets//images/raymond-hsu-eFBKa5Rw-0U-unsplash.jpg"
            name={m.userFullName}
            msg="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A rerum animi et cupiditate pariatur, officiis odit numquam soluta, laudantium doloribus quae iste dolore tempore quo! Tempore hic consectetur aliquid tenetur."
            time={getTimeFromDate(new Date(m.sentAt))}
            key={m.id}
          />
        </AnimateFromToRightInView>
      ))}
    </div>
  );
}

function Message({ image, name, msg, time }: message) {
  return (
    <div className="my-3 mx-6 flex items-end ">
      <img src={image} className="w-10 rounded-full mr-3" alt="" />
      <div className="border border-gray-300 py-3 px-5 rounded-lg rounded-bl-none bg-gray-100">
        <h2 className="font-bold text-primary text-base">{name}</h2>
        <p className="text-secondary font-medium">{msg}</p>
        <span className="w-fit block text-sm text-gray-500 ml-auto">
          {time}
        </span>
      </div>
    </div>
  );
}
