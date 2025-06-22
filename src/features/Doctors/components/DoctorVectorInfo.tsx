export type doctorInfoProps = {
  imgSrc?: string;
  name: string;
  specility: string;
  children?: React.ReactNode;
};

export default function DoctorVectorInfo({
  name,
  specility,
  imgSrc,
  children,
}: doctorInfoProps) {
  return (
    <div className="flex gap-3">
      <img
        src={imgSrc}
        alt="doctor image"
        className="rounded-full w-14 h-14 bg-black"
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col space-y-1 ">
          <p className=" font-medium">
            <span className="text-primary ">Dr.</span>
            {name}
          </p>
          <span className="text-secondary bg-third text-sm px-2 py-1  rounded-sm w-fit">
            {specility}
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
