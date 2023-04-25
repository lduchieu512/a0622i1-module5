import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ss6-bt-bai1',
  templateUrl: './ss6-bt-bai1.component.html',
  styleUrls: ['./ss6-bt-bai1.component.css']
})
export class Ss6BtBai1Component implements OnInit {
  registerForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('',[Validators.required,Validators.pattern( /^\+84\d{9,10}$/)])

    });
  }
  createAccount(){
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

}
