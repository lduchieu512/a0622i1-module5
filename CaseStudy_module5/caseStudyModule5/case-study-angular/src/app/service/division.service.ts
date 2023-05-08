import { Injectable } from '@angular/core';
import {DivisionDAO} from "../data/divisionDao";

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }
  getAllDivision(){
    return DivisionDAO.divisions;
  }
}
