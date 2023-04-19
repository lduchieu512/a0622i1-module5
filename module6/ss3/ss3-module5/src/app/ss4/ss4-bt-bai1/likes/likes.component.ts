import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  like =0;

  constructor() { }

  ngOnInit(): void {
  }
  likeThis() {
    this.like++;
  }
}
