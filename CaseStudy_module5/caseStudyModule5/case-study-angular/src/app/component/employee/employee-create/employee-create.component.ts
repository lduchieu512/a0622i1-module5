import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";
import {Router} from "@angular/router";
import {PositionService} from "../../../service/position.service";
import {DivisionService} from "../../../service/division.service";
import {EducationDegreeService} from "../../../service/education-degree.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Position} from "../../../model/position";
import {Division} from "../../../model/division";
import {EducationDegree} from "../../../model/education-degree";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeFormCreate: FormGroup;
  positions: Position [] = [];
  divisions: Division [] = [];
  educationDegrees: EducationDegree [] = [];

  constructor(private employeeService: EmployeeService,
              private position: PositionService,
              private division: DivisionService,
              private educationDegree: EducationDegreeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.positions = this.position.getAllPosition();
    this.divisions = this.division.getAllDivision();
    this.educationDegrees = this.educationDegree.getAllEducationDegree();
    this.employeeFormCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('^NV-\\d{4}$')]),
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D-$')]),
      birthday: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('(^\\d{9}$)|(^\\d{12}$)')]),
      salary: new FormControl('',[Validators.required,Validators.min(0)]),
      phone: new FormControl('',[Validators.required,Validators.pattern('^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)\\d{7}$')]),
      email: new FormControl('',[Validators.required,Validators.email]),
      address: new FormControl('',[Validators.required]),
      position: new FormControl('',[Validators.required]),
      educationDegree: new FormControl('',[Validators.required]),
      division: new FormControl('',[Validators.required])

    });
  }
  createEmployee(){
    this.employeeService.createEmployee(this.employeeFormCreate.value);
    this.router.navigateByUrl('employee/list');
  }


}
