export type reservation = {
  time: string;
  owner: string;
  desctiption: string;
  userId: number;
};

export type reservatDayCardProps = {
  reservation: reservation;
  duration: number;
};
