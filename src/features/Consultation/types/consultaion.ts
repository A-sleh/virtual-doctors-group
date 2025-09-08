import { doctor } from '@/features/Doctors/types/doctor';

export type FilterBoxProps = {
  Icon: React.ElementType;
  status: string;
  numberOfConsultation: number;
  bgColor: string;
  duration?: number;
};

export type consultaionContent = {
  doctorId: number;
  date: string;
  description: string;
  status?: 'Open' | 'Closed' | 'Pending' | "Rejected" | undefined;
  time?: string;
} & doctor;

export type upConmingResType = {
  doctorId: number;
  name: string;
  specility: string;
  date: string;
  time: string;
  description?: string;
  status?: 'Open' | 'Closed' | 'Pending';
};

export type consultaionContentProps = {
  doctor: consultaionContent;
};

export type DoctorBoxProps = {
  children?: React.ReactNode;
  doctor: upConmingResType | consultaionContent;
};

export type consultStatusProps = {
  status: 'Open' | 'Closed' | 'Pending' | 'Rejected' | undefined;
  date: string;
  time?: string;
};
