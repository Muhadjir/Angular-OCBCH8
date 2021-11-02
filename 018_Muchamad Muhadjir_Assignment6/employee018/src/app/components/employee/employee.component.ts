import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:Employee[] = []
  id:number
  constructor(public authService: AuthService,public router:Router,private actRoute: ActivatedRoute) { 
    this.id = actRoute.snapshot.params.id 
  }
  ngOnInit(): void {
    this.getData()
  }
  getData(){
    this.authService.getEmployee().subscribe(res => {
      this.employees = res
    })
  }

  deleteEmployee(id:number){

    this.authService.deleteEmployee(id).subscribe((response) => {
      this.getData()
    })
 
  }


}
