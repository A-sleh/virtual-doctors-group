import DoctorVectorInfo from "@/features/Doctors/components/DoctorVectorInfo";

type DoctorInfoHeaderType = {
    children?: React.ReactNode;
    name: string;
    location: string;
    specility: string;
}

export default function DoctorInfoHeader({children,location,name,specility}:DoctorInfoHeaderType) {
  return (
    <div className="rounded-box  flex justify-between items-start  gap-2">
      <DoctorVectorInfo name={name} specility={specility} imageSize="h-28 w-28" withAnimation={true}>
        <p className="text-secondary">{location}</p>
      </DoctorVectorInfo>
      {children}
    </div>
  )
}
