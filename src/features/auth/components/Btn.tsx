// import AnimateButton from '@/lib/Animation/AnimateButton';

export default function Btn({
  name,
  color,
  backgroundColor,
  stopEvent,
}: {
  name: string;
  color: string;
  backgroundColor: string;
  stopEvent: boolean;
}) {
  return (
    <button
      className={`${color} ${backgroundColor} rounded-xl  cursor-pointer py-0.5 w-full font-normal`}
      disabled={stopEvent}
    >
      {name}
    </button>
  );
}
