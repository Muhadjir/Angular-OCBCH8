import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:Todo[]=[];
  todoDone:number = 0;

  // constructor() { }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }

  toggleDone(id:number){
    this.todos.map((v,i) => {
      if (i == id ){
        v.completed = !v.completed;
        (v.completed == true) ? this.todoDone += 1 : this.todoDone -= 1
      } 
      // console.log(v)

      return v
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false
      },
      {
        content: 'Second Todo',
        completed: false
      },
      {
        content: 'Third Todo',
        completed: false
      }
    ]
  }

}
