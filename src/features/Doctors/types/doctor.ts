

export type doctor = {
  specility: string;
  name: string;
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
  experianse: string; 
  rating: number;
} 

export type DoctorVectorInfoProps = {
  imgSrc?: string;
  children?: React.ReactNode;
  imageSize?: string;
  fontSize?: string;
  withAnimation?: boolean;
} & doctor;

export type ratingItemProps = {
  Icon: React.ElementType;
  text: string | number;
  overWriteStyle?: string;
};
