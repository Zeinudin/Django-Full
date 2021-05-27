import { Injectable } from '@angular/core';
import { Reception } from './model/reception.model';
import { Doctor } from './model/doctor.model'; 
import { Time } from './model/time.model';
//import { RECEPTIONS } from './model/mock-receptions';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


import {UserService} from './user.service';

const receptionUrl = 'http://127.0.0.1:8000/api/api/receptions/';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
                               'Authorization': 'Token ' + JSON.parse(localStorage.getItem("currentUser") + '')  })
  };

  /*getReceptions(): Observable<Reception[]> {
    const receptions = of(RECEPTIONS);
    this.messageService.add('HeroService: fetched heroes');
    return receptions;
  }
  */

  getReceptions(): Observable<Reception[]>{
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
                                 'Authorization': 'Token ' + JSON.parse(localStorage.getItem("currentUser") + '')  })
    };
    return this.http.get<Reception[]>(receptionUrl, this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched reception')),
        catchError(this.handleError<Reception[]>('getReception ' + localStorage.getItem("currentUser") , []))
      );
  }

  getDoctors(): Observable<Doctor[]>{
    
    return this.http.get<Reception[]>('http://127.0.0.1:8000/api/api/doctors/', this.httpOptions)
      .pipe(
        tap(_ => this.log('fetched reception')),
        catchError(this.handleError<Reception[]>('getDoctors ', []))
      );
  }

  getTime() : Observable<Time[]>{

    return this.http.get<Time[]>('http://127.0.0.1:8000/api/api/time/', this.httpOptions )
    .pipe(
      tap(_ => this.log('fetched reception')),
      catchError(this.handleError<Reception[]>('getDoctors ', []))
    );
  }

  getReception(id: number): Observable<Reception> {
    //const url = '${urldie}/${id}';
    return this.http.get(receptionUrl + id + '/?format=json', this.httpOptions).pipe(
      tap(_ => this.log('fetched reception id=${id}')),
      catchError(this.handleError<Reception>('getReception id=${id}'))
    );
  }

  /*
  getReception(id: number): Observable<Reception> {
    const reception = RECEPTIONS.find(r => r.id === id) as Reception;
    this.messageService.add(`ReceptionService: fetched reception id=${id}`);
    return of(reception);
  }
  */

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService, 
    private _userService: UserService) { }

    /** PUT: update the hero on the server */
  updateReception(reception: Reception): Observable<any> {
    return this.http.put(receptionUrl + reception.id + '/', reception, this.httpOptions).pipe(
      tap(_ => this.log(`updated reception id=${reception.id}`)),
      catchError(this.handleError<any>('updateReception'))
    );
  }

  deleteReception(id: number): Observable<Reception> {
    return this.http.delete(receptionUrl + id + '/', this.httpOptions).pipe(
      tap(_ => this.log(`deleted reception id=${id}`)),
      catchError(this.handleError<Reception>('deleteReception'))
      );
  }

  createReception(data: Reception): Observable<Reception> {
    
    
    this.messageService.add('' + data.date)
    
    return this.http.post('http://127.0.0.1:8000/api/api/receptions/', data, this.httpOptions).pipe(
      tap(_ => this.log('fetched reception')),
      catchError(this.handleError<Reception>('createReception', {}))
      
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
