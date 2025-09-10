export type reservation = {
  time: string;
  owner: string;
  desctiption: string;
  userId: number;
  id: number;
  status: string;
  type: string;
  clinicId: number;
};

export type reservatDayCardProps = {
  reservation: reservation;
  duration: number;
};
