import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee_id: number
  form = {
    inputData: new FormGroup({
      title:new FormControl('',[Validators.required,Validators.minLength(5)]),
      firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      role:new FormControl('',[Validators.required,Validators.minLength(1)]),
      password: new FormControl('',[Validators.required,Validators.minLength(5)]),
      confirmpassword: new FormControl('',[Validators.required,Validators.minLength(5)]),
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
    return this.form.inputData.get('firstname')
  }
  get lastName(){
    return this.form.inputData.get('lastname')
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
    return this.form.inputData.get('confirmpassword')
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
  }

}
