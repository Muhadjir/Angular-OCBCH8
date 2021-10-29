import { Component } from '@angular/core';
import { Task } from './models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoApp';
  tasks:Task[] = []
  categories = ['School', 'Work', 'Hobby', 'Currency']

  handleFormOnSubmit(form:NgForm){
    // console.log(form)
    const { name, category } = form.value
    console.log({name, category})
    this.tasks.push(new Task(name, "incomplete", category)) 
    form.reset()
  }
}
