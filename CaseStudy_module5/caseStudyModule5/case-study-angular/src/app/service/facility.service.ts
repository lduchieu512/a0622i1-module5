import { Injectable } from '@angular/core';
import {FacilityDao} from "../data/facilityDao";
import {Facility} from "../model/facility";


@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor() { }
  getAll(){
    return FacilityDao.facilitys;
  }
  createFacility(facility : Facility){
    FacilityDao.facilitys.push(facility);
  }

  updateFacility(id: string,facility: Facility){
    for (let i = 0; i < FacilityDao.facilitys.length; i++) {
      if (FacilityDao.facilitys[i].id ===id ){
        FacilityDao.facilitys[i] = facility;
      }
    }
  }
  findByIdCustomer(id: string) {
    return FacilityDao.facilitys.find(facility => facility.id === id);
  }


}
