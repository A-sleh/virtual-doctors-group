
import { IAllDoctorInfo } from '../api/get-doctors';

export type headerProps = {
  title: string;
  link?: string;
};

export type DoctorInfoProps = {
  doctor: IAllDoctorInfo;
};

export type limitProps = {
  limitNumber: number;
};
