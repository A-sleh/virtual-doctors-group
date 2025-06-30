import { ratingItemProps } from '../types/doctor';

export default function RatingItem({
  Icon,
  text,
  overWriteStyle = '',
}: ratingItemProps) {
  return (
    <div className={`flex gap-2 items-center ${overWriteStyle}`}>
      <Icon size={25} className="text-fivth p-1 bg-fivth-hover rounded-full" />
      <p>{text} </p>
    </div>
  );
}
