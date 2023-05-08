import { Injectable } from '@angular/core';
import {EducationDegreeDao} from "../data/educationDegreeDao";

@Injectable({
  providedIn: 'root'
})
export class EducationDegreeService {

  constructor() { }
  getAllEducationDegree(){
    return EducationDegreeDao.educationDegrees;
  }
}
