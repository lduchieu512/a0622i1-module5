import {Component, OnInit} from '@angular/core';
import {Todo} from "./todo";
import {FormControl, FormGroup, Validators} from '@angular/forms';

let _id = 1;

@Component({
  selector: 'app-ss6-th-bai1',
  templateUrl: './ss6-th-bai1.component.html',
  styleUrls: ['./ss6-th-bai1.component.css']
})
export class Ss6ThBai1Component implements OnInit {
  todos : Todo[] = [];
  content = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }
  toggleTodo(i :number){
    this.todos[i].complete = !this.todos[i].complete;
  }

  change(){
    const value = this.content.value;
    if (value){
      const todo : Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }


}
