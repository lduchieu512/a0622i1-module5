import {Injectable} from '@angular/core';
import {CustomerDao} from "../data/customerDao";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() {
  }

  getAllCustomer() {
    return CustomerDao.customers;
  }

  createCustomer(customer: Customer) {
    CustomerDao.customers.push(customer);
  }

  findByIdCustomer(id: string) {
    return CustomerDao.customers.find(customer => customer.id === id);
  }

  updateCustomer(id: string, customer: Customer) {
    for (let i = 0; i < CustomerDao.customers.length; i++) {
      if (CustomerDao.customers[i].id ===id ){
        CustomerDao.customers[i] = customer;
      }
    }
  }


}
