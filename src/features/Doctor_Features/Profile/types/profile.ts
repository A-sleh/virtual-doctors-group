import { IDoctorInfoResponse } from "../api/get-profile-info";

export type discriptionCardProps = {
  title: string;
  description?: string;
};

export type patientRating = {
  name: string;
  description: string;
  rating: number;
  serviceRating: number;
  delayRating: number;
};

export type patientRatingProps = {
  patient: patientRating;
};

export type workingTimeProps = {
  dayHours: string[];
};

export type reservationBoxProps = {
  reservationCost?: number;
  lcocation: any;
  doctor: IDoctorInfoResponse | undefined;
  type: string;
  register: any;
  children?: React.ReactNode;
};
