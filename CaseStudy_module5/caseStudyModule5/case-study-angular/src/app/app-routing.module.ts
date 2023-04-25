import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroComponent} from "./component/templates/intro/intro.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {EmployeeListComponent} from "./component/employee/employee-list/employee-list.component";
import {EmployeeEditComponent} from "./component/employee/employee-edit/employee-edit.component";
import {EmployeeCreateComponent} from "./component/employee/employee-create/employee-create.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";
import {ContractCreateComponent} from "./component/contract/contract-create/contract-create.component";
import {ContractEditComponent} from "./component/contract/contract-edit/contract-edit.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";


const routes: Routes = [
  {path:'',
  component: IntroComponent},
  {path:'customer/list',
    component: CustomerListComponent},
  {path:'customer/create',
    component: CustomerCreateComponent},
  {path:'customer/edit/:id',
    component: CustomerEditComponent},
  {path:'employee/list',
    component: EmployeeListComponent},
  {path:'employee/edit/:id',
    component: EmployeeEditComponent},
  {path:'employee/create',
    component: EmployeeCreateComponent},

  {path:'contract/list',
    component: ContractListComponent},
  {path:'contract/create',
    component: ContractCreateComponent},
  {path:'contract/edit/:id',
    component: ContractEditComponent},
  {path:'facility/list',
    component: FacilityListComponent},
  {path:'facility/create',
    component: FacilityCreateComponent},
  {path:'facility/edit/:id',
    component: FacilityEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
