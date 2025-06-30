export type FilterBoxProps = {
  Icon: React.ElementType;
  status: string;
  numberOfConsultation: number;
  bgColor: string;
  duration?: number;
};

export type doctor = {
  specility: string;
  name: string;
};

export type consultaionContent = {
  description: string;
  date: string;
  status: string;
} & doctor;

export type consultaionContentProps = {
  doctor: consultaionContent
} 