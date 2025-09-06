

export type doctor = {
  specility: string | undefined;
  name: string | undefined;
};

export type doctorSearching = {
  location: string;
  rating: number;
  exp: string;
} & doctor ;

export type doctorSearchingProps = {
  doctor: doctorSearching
} 

export type doctorStatisticsProps = {
  location: string;
  rating: number;
} 

export type DoctorVectorInfoProps = {
  imgSrc?: string;
  children?: React.ReactNode;
  imageSize?: string;
  doctorId: number;
  fontSize?: string;
  withAnimation?: boolean;
} & doctor;

export type ratingItemProps = {
  Icon: React.ElementType;
  text: string | number;
  overWriteStyle?: string;
};
