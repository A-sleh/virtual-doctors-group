import { doctor } from "@/features/Doctors/types/doctor";

export type reservationContent = {
    description: string ;
    time: string;
    date: string;
} & doctor

export type reservationProps = {
    doctor: reservationContent
} 