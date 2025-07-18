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
  workingHours: string[];
};

export type reservationBoxProps = {
  type: string;
  children?: React.ReactNode;
};
