import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-ss5-th-bai2',
  templateUrl: './ss5-th-bai2.component.html',
  styleUrls: ['./ss5-th-bai2.component.css']
})
export class Ss5ThBai2Component implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress = 0;

  loading(){
    let interval = setInterval(()=>{
      this.progress = +this.progress+5;
      if (this.progress ==100){
        clearInterval(interval);
      }
    },1000);
  }

  constructor() { }

  ngOnInit(): void {
    this.loading();
  }

}
