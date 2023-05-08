import { Injectable } from '@angular/core';
import {PositionDao} from "../data/positionDao";

@Injectable({
  providedIn: 'root'
})
export class PositionService {


  constructor() { }
  getAllPosition(){
    return PositionDao.positions;
  }
}
