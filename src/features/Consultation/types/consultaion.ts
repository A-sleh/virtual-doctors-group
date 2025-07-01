import { doctor } from '@/features/Doctors/types/doctor';

export type FilterBoxProps = {
  Icon: React.ElementType;
  status: string;
  numberOfConsultation: number;
  bgColor: string;
  duration?: number;
};

export type consultaionContent = {
  description: string;
  date: string;
  status?: 'opened' | 'closed' | 'pending';
} & doctor;

export type consultaionContentProps = {
  doctor: consultaionContent;
};

export type DoctorBoxProps = {
  children?: React.ReactNode;
  doctor: {
    time?: string;
  } & consultaionContent;
};

export type consultStatusProps = {
  status: 'opened' | 'closed' | 'pending' | undefined;
  date: string;
  time?: string;
};
