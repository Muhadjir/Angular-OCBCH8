import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoFormComponent } from './components/add-todo-form/add-todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoEncapsulationComponent } from './view-encap/no-encapsulation/no-encapsulation.component';
import { EmulEncapsulationComponent } from './view-encap/emul-encapsulation/emul-encapsulation.component';
import { ShadowdomEncapsulationComponent } from './view-encap/shadowdom-encapsulation/shadowdom-encapsulation.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoListComponent,
    AddTodoFormComponent,
    NoEncapsulationComponent,
    EmulEncapsulationComponent,
    ShadowdomEncapsulationComponent,
    LoginReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
