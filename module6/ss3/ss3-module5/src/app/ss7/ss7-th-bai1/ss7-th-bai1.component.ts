import { Component, OnInit } from '@angular/core';
import {DateUtilService} from "./service/date-util.service";

@Component({
  selector: 'app-ss7-th-bai1',
  templateUrl: './ss7-th-bai1.component.html',
  styleUrls: ['./ss7-th-bai1.component.css']
})
export class Ss7ThBai1Component implements OnInit {
  output= '';


  constructor(private  dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }
  onChange(value){
    this.output = this.dateUtilService.getDiffToNow(value);
  }

}
