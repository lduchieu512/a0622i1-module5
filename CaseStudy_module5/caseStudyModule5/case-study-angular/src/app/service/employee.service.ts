import { Injectable } from '@angular/core';
import {EmployeeDao} from "../data/employeeDao";
import {Employee} from "../model/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getAllEmployee(){
    return EmployeeDao.employees;
  }

  createEmployee(employee: Employee){
    EmployeeDao.employees.push(employee);
  }
  findByIdEmployee(id : string){
    EmployeeDao.employees.find(employee => employee.id ===id);
  }

  updateEmployee(id: string, employee : Employee){
    for (let i= 0; i <EmployeeDao.employees.length; i++){
      if (EmployeeDao.employees[i].id===id){
        EmployeeDao.employees[i] = employee;
      }
    }
  }
}
