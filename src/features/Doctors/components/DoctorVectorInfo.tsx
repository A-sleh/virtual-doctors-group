
export type doctorInfoProps = {
  imgSrc?: string;
  name: string;
  specility: string
}

export default function DoctorVectorInfo({name,imgSrc,specility}:doctorInfoProps) {
  return (
    <div className="flex gap-4">
      <img
        src={imgSrc}
        alt="doctor image"
        className="rounded-full w-14 h-14 bg-black"
      />
      <div className="flex flex-col gap-y-1">
        <p className=" font-medium">
          <span className="text-[#1579e5] ">Dr.</span>
          {name}
        </p>
        <span className="text-gray-400 bg-[#8b8b8b2a] px-2 py-0 rounded-md w-fit">
          {specility}
        </span>
      </div>
    </div>
  );
}