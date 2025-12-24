import type { Student } from "./studentTypes";

export interface SchoolClass {
  id: number;
  name: string;
  numOfPlaces: number;
  students: Student[];
}

export interface ClassesImagePath{
  name: string;
  src: string;
}
