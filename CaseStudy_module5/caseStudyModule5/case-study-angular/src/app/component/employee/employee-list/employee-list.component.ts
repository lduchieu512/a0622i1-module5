import {Component, OnInit} from '@angular/core';
import {DivisionService} from "../../../service/division.service";
import {EducationDegreeService} from "../../../service/education-degree.service";
import {Position} from "../../../model/position";
import {Division} from "../../../model/division";
import {EducationDegree} from "../../../model/education-degree";
import {EmployeeService} from "../../../service/employee.service";
import {PositionService} from "../../../service/position.service";
import {Employee} from "../../../model/employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  positions: Position [] = [];
  divisions: Division [] = [];
  educationDegrees: EducationDegree [] = [];
  employees: Employee [] = [];


  constructor(private position: PositionService,
              private division: DivisionService,
              private educationDegree: EducationDegreeService,
              private employee: EmployeeService){
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.positions = this.position.getAllPosition();
    this.divisions = this.division.getAllDivision();
    this.educationDegrees = this.educationDegree.getAllEducationDegree();
    this.employees = this.employee.getAllEmployee();
  }


}
