import { AnimateFromToRightInView } from '@/lib/Animation/AnimateFromLeftToRight';
import { statistics } from '../../types/dashboard';

import { api } from '@/lib/api-client';

import { useQuery } from '@tanstack/react-query';

async function getDoctor() {
  const data = await api.get(`/Doctor/GetAll?page=1&pageSize=20`);
  return data;
}

export function Statistics() {
  const { data, isPending } = useQuery({
    queryFn: getDoctor,
    queryKey: ['all-doctors'],
  });

  if (isPending) return null;

  return (
    <div className="m-2 grid gap-y-5 row-span-1">
      <AnimateFromToRightInView duration={0.75}>
        <Stat title="Number of Visit" num={7500} ago="Last month" />
      </AnimateFromToRightInView>
      <AnimateFromToRightInView duration={1}>
        <Stat title="Number of Doctors" num={data?.length} ago="Last month" />
      </AnimateFromToRightInView>
      <AnimateFromToRightInView duration={1.25}>
        <Stat title="Number of Sick" num={5000} ago="Last month" />
      </AnimateFromToRightInView>
    </div>
  );
}

function Stat({ title, num, ago }: statistics) {
  return (
    <div className="p-3 bg-white rounded-lg">
      <h1 className="font-bold mb-3">{title}</h1>
      <p className="flex items-center justify-between">
        <span className="text-primary text-lg font-bold">{num}</span>
        <span className="text-secondary text-sm">{ago}</span>
      </p>
    </div>
  );
}
