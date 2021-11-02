import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint:string = 'http://localhost:3000'
  headers= new HttpHeaders().set('Content-Type', 'application/json')
  currentUser: {name:string, email:string, id:number} = {name:'', email:'', id:0}
  
  constructor(private http:HttpClient, private router:Router) { }

  signIn(user: User){
    const api = `${this.endpoint}/login`
    return this.http.post(api,user)
    .subscribe((res:any) => {
          localStorage.setItem('access_token', res.token)
          this.getUserProfile(res.id).subscribe((res:any) =>{
            this.currentUser = res;
            this.router.navigate(['user-profile/' + res.id])
          })
        })
    // .pipe(catchError(this.handleError))
  }
  // signIn(user:User){
  //   return this.http.post<any>(`${this.endpoint}/login`, user)
  //   .subscribe((res:any) => {
  //     localStorage.setItem('access_token', res.token)
  //     this.getUserProfile(res.id).subscribe((res:any) =>{
  //       this.currentUser = res;
  //       this.router.navigate(['user-profile/' + res.id])
  //     })
  //   })
  // }

  getUserProfile(id:any): Observable<any>{
    let api = `${this.endpoint}/user-profile/${id}`
    return this.http.get(api, {headers: this.headers})
    .pipe(
      map((res:any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  getToken(){
    return localStorage.getItem('access_token')
  }

  signUp(user: User): Observable<any> {
    let api = `${this.endpoint}/register`
    return this.http.post(api, user).pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse){
    let msg = ''
    if(error.error instanceof ErrorEvent)
      msg = error.error.message
    else
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`
    return throwError(msg)
  }

}
