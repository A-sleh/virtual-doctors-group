import AnimateButton from '@/lib/Animation/AnimateButton';

export default function Btn({
  name,
  color,
  backgroundColor,
}: {
  name: string;
  color: string;
  backgroundColor: string;
}) {
  return (
    <AnimateButton
      className={`${color} ${backgroundColor} rounded-xl  cursor-pointer py-0.5 w-full font-normal`}
    >
      {name}
    </AnimateButton>
  );
}
