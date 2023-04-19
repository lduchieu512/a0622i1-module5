import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss5-th-bai1',
  templateUrl: './ss5-th-bai1.component.html',
  styleUrls: ['./ss5-th-bai1.component.css']
})
export class Ss5ThBai1Component implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;


  constructor() { }

  ngOnInit(): void {
  }

}
