import {Employee} from "./employee";
import {Customer} from "./customer";
import {Facility} from "./facility";

export interface Contract {
  id?:number;
  customer?: Customer;
  employee?: Employee;
  facility?: Facility;
  startDate?: string;
  endDate?: string;
  deposit?: number;
  totalMoney?: number;


}
