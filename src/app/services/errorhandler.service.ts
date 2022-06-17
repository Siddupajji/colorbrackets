import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {



  constructor() { }


  // tslint:disable-next-line: typedef
  errorhandling<T>(result?:T){
      return (error: any): Observable<T> => {
        console.log(`the error is ${error.message}`);
        return of(result as T)
      }
  }


}
