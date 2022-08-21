export interface GroupType {
  id: string | number;
  title: string;
  description: string;
  days: dayType[];
}

export interface dayType {
  id?: string | number;
  number: number;
  muscle_group: string;
  workout: exerciseType[];
}

export interface exerciseType {
  id?: string | number;
  exercise?: string;
  sets?: string;
  repetition?: string;
  time?: string;
  observation?: string;
}
