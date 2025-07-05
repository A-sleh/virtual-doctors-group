import DoctorVectorInfo from "@/features/Doctors/components/DoctorVectorInfo";

type DoctorInfoHeaderType = {
    children?: React.ReactNode;
}

export default function DoctorInfoHeader({children}:DoctorInfoHeaderType) {
  return (
    <div className="rounded-box  flex justify-between items-end sm:items-start sm:flex-row flex-col-reverse gap-2">
      <DoctorVectorInfo name="Abdulfatah asleh" specility="dentist" imageSize="h-28 w-28" withAnimation={true}>
        <p className="text-secondary"> Aleepo, syria</p>
      </DoctorVectorInfo>
      {children}
    </div>
  )
}
