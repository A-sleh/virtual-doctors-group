export type reservation = {
  time: string;
  owner: string;
  desctiption: string;
};

export type reservatDayCardProps = {
  reservation: reservation;
  duration: number;
};