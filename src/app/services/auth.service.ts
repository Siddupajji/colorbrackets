import { allUsers } from './../model/allusers.model';
import { ErrorhandlerService } from './errorhandler.service';
import { User } from './../model/user.model';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {first, catchError, tap} from 'rxjs/operators'
import 'rxjs-compat/add/observable/throw'
import { Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error:HttpErrorResponse
  isLoggedin$ = new BehaviorSubject<boolean>(false)
  usedId: Pick<User, "id">
  constructor(private http: HttpClient, private errorhandler: ErrorhandlerService, private route: Router) { }
  private url = "http://localhost:3000/auth/"

  httpOptions: {headers:HttpHeaders} ={
    headers: new HttpHeaders({"Content-Type": "application/json"})
  }

  signup(user: Omit<User, "id">): Observable<User>{
    return this.http.post<User>(`${this.url}/signup`, user)
    .pipe(first(),
    catchError(
      this.errorhandler.errorhandling<User>()
    ))
  }

  login(email: Pick<User, "email">, password: Pick<User, "password">): Observable<{token: string; userId: Pick<User, "id">}>{
    return this.http.post(`${this.url}login`,{email, password}, this.httpOptions ).pipe(first(),
    tap((tokenObject: {token:string; userId: Pick<User,"id"> }) => {
      this.usedId = tokenObject.userId
      localStorage.setItem('token', tokenObject.token)
      this.isLoggedin$.next(true)
      this.route.navigate(['/users'])
    }),
    catchError(
      this.errorhandler.errorhandling<{token:string; userId: Pick<User,"id"> }>()
    ))
  }


  getUsers(): Observable<any>{
    return this.http.get("https://retoolapi.dev/GFHqAV/getemployees")

}
}
