import { Component, OnInit } from '@angular/core';
import {Pet} from "./pet";

@Component({
  selector: 'app-ss3-th-bai2',
  templateUrl: './ss3-th-bai2.component.html',
  styleUrls: ['./ss3-th-bai2.component.css']
})
export class Ss3ThBai2Component implements OnInit {
  pet: Pet = {
    name : 'pupie',
    image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
