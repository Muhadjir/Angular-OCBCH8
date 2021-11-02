import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee_id: number
  emp: Employee = {} as Employee
  form = {
    inputData: new FormGroup({
      title:new FormControl('',[Validators.required,Validators.minLength(5)]),
      firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
      role:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      confirmPassword: new FormControl('',[Validators.required,Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email])
    })
  }
  constructor(public AuthService:AuthService,public router:Router, activatedRoute: ActivatedRoute) {
    this.employee_id = activatedRoute.snapshot.params.id 
   }

  get title(){
    return this.form.inputData.get('title')
  }
  get firstName(){
    return this.form.inputData.get('firstName')
  }
  get lastName(){
    return this.form.inputData.get('lastName')
  }
  get role(){
    return this.form.inputData.get('role')
  }
  get email(){
    return this.form.inputData.get('email')
  }
  get password(){
    return this.form.inputData.get('password')
  }
  get confirmPassword(){
    return this.form.inputData.get('confirmPassword')
  }

  employeeById(id: number) {
    this.AuthService 
    .employeeById(id)
    .subscribe(e => {
      console.log(e, "<<<<getbyId")
      this.emp = e
      //==setValue untuk editForm==
      this.form.inputData.controls['title'].setValue(e.title)
      this.form.inputData.controls['firstName'].setValue(e.firstName)
      this.form.inputData.controls['lastName'].setValue(e.lastName)
      this.form.inputData.controls['email'].setValue(e.email)
      this.form.inputData.controls['role'].setValue(e.role)
    })
  }

  update(){
    
    console.log(this.employee_id)
    console.log(this.form.inputData.value)
    this.AuthService.update(this.form.inputData.value, this.employee_id)
    .subscribe((res) =>{
      if(res){
        this.form.inputData.reset()
        this.router.navigate(['home'])
      }
    })
  }
  ngOnInit(): void {
    this.employeeById(this.employee_id)
  }

}
