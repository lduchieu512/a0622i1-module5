import {Position} from "./position";
import {Division} from "./division";
import {EducationDegree} from "./education-degree";

export interface Employee {
  id?: string;
  name?:string;
  birthday?: string;
  idCard?: string;
  salary?: number;
  phone?: string;
  email?: string;
  address?:string;
  position?: Position;
  educationDegree?: EducationDegree;
  division?: Division;





}
