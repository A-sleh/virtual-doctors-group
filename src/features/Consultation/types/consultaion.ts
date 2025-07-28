import { doctor } from '@/features/Doctors/types/doctor';

export type FilterBoxProps = {
  Icon: React.ElementType;
  status: string;
  numberOfConsultation: number;
  bgColor: string;
  duration?: number;
};

export type consultaionContent = {
  date: string;
  description: string;
  status?: 'opened' | 'closed' | 'pending';
  time?: string;
} & doctor;

export type upConmingResType = {
  name: string;
  specility: string;
  date: string;
  time: string;
  description?: string;
  status?: 'opened' | 'closed' | 'pending';
};

export type consultaionContentProps = {
  doctor: consultaionContent;
};

export type DoctorBoxProps = {
  children?: React.ReactNode;
  doctor: upConmingResType | consultaionContent;
};

export type consultStatusProps = {
  status: 'opened' | 'closed' | 'pending' | undefined;
  date: string;
  time?: string;
};
