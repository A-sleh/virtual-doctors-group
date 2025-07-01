import { doctor } from '@/features/Doctors/types/doctor';

export type headerProps = {
  title: string;
  link?: string;
};

export type DoctorInfoProps = {
  doctor: doctor;
  rating?: string;
};

export type limitProps = {
  limitNumber: number;
};
