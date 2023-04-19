import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss3-bt-bai3',
  templateUrl: './ss3-bt-bai3.component.html',
  styleUrls: ['./ss3-bt-bai3.component.css']
})
export class Ss3BtBai3Component implements OnInit {
  result: number =0;
  firstNumber: number = 0;
  secondNumber: number = 0;
  error = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator(operation: string, firstNumber: string,secondNumber : string) {
    this.firstNumber = parseInt(firstNumber);
    this.secondNumber = parseInt(secondNumber);
    if (firstNumber == '' || secondNumber == '') {
      this.result = 0;
    } else {
      switch (operation) {
        case '+':
          this.result = this.firstNumber + this.secondNumber;
          this.error = '';
          break;
        case '-':
          this.result = this.firstNumber - this.secondNumber;
          this.error = '';
          break;
        case '*' :
          this.result = this.firstNumber * this.secondNumber;
          this.error = '';
          break;
        case '/':
          if (this.secondNumber === 0) {
            this.error = 'Second Number is not valid !';
          } else {
            this.result = this.firstNumber / this.secondNumber;
          }
          break;
      }
    }
  }

}
