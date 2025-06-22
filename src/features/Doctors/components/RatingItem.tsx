type ratingItemProps = {
  Icon: React.ElementType;
  text: string | number;
};

export default function RatingItem({Icon,text}: ratingItemProps) {
return (
    <div className="flex gap-1 items-center">
        <Icon size={20} className="text-fivth p-1 bg-fivth-hover rounded-full"/>
        <p>{text} </p>
    </div>
)
}
