export type statistics = {
  title: string | undefined;
  num: number | undefined;
  ago: string | undefined;
};

export type listDoctors = {
  image: string | undefined;
  name: string | undefined;
  counterOfMessage: number | undefined;
};

export type listJoinNatification = {
  id: number | undefined;
  image: string | undefined;
  name: string | undefined;
  dateOfMessage: string | undefined;
};
export type doctorTable = {
  x: number | undefined;
  background: string | undefined;
  image: string | undefined;
  name: string | undefined;
  phone: string | undefined;
  email: string | undefined;
  specialization: string | undefined;
  joiningDate: string | undefined;
};

export type requestJoinDoctor = {
  image: string | undefined;
  name: string | undefined;
  dateOfMessage: string | undefined;
  speciality: string | undefined;
  description: string | undefined;
};
export type patirntTable = {
  x: number | undefined;
  background: string | undefined;
  image: string | undefined;
  name: string | undefined;
  email: string | undefined;
  birthDate: string | undefined;
  phone: string | undefined;
  joiningDate: string | undefined;
};

export type table = {
  image: string | undefined;
  name: string | undefined;
  specialization: string | undefined;
  date: string | undefined;
  background: string | undefined;
};

export type message = {
  image: string | undefined;
  name: string | undefined;
  msg: string | undefined;
  time: string | undefined;
};

export type header = {
  title: string ;
  location: string | undefined;
  goal: string | undefined;
};

export type search = {
  nameOfSearch: string | undefined;
  query: string | undefined;
  setQuery(x: string): void | undefined;
};

export type columns = {
  columnFour: string | undefined;
  columnFive: string | undefined;
};

export type notification = {
  name: string | undefined;
  image: string | undefined;
  msg: string | undefined;
  time: string | undefined;
};
