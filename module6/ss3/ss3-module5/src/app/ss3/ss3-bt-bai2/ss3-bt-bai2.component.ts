import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss3-bt-bai2',
  templateUrl: './ss3-bt-bai2.component.html',
  styleUrls: ['./ss3-bt-bai2.component.css']
})
export class Ss3BtBai2Component implements OnInit {
  color: string;

  changeColor(target: any) {
    this.color = target.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
