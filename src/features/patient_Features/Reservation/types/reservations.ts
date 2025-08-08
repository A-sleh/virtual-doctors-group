import { doctor } from '@/features/Doctors/types/doctor';

export type reservationContent = {
  doctorId?: number;
  description: string;
  time: string;
  date: string;
} & doctor;

export type reservationProps = {
  doctor: reservationContent;
};
