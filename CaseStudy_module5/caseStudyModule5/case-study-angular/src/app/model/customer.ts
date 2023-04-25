import {CustomerType} from "./customer-type";

export interface Customer {
  id?:string;
  type?: CustomerType;
  name?: string;
  birthday ?: string;
  idCard?: string;
  phone?:string;
  email?:string;
  address?: string;



}
