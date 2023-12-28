import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClubStruct } from './club-struct';

@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {
  public data: any;
  constructor(private http : HttpClient) { }

getNeighborhood() :Observable<any> {
  const url = 'http://localhost:9000/100clubes/barrio';
  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}


getClubByNeighborhood(id:number) :Observable<any>{
  const url = `http://localhost:9000/100clubes/club?club=${id}`;
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}

getClubById(id:number) :Observable<any>{
  const url = `http://localhost:9000/100clubes/id?id=${id}`;
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}


getCountClub() : Observable<any>{
  const url = 'http://localhost:9000/100clubes/clubes';
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}


getCountNeighborhood() : Observable<any>{
  const url = 'http://localhost:9000/100clubes/barrios';
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}

getCountActiveClubs() : Observable<any>{
  const url = 'http://localhost:9000/100clubes/activos';
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}


getCountInactiveClubs() : Observable<any>{
  const url = 'http://localhost:9000/100clubes/inactivos';
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}

getInactiveClubs() : Observable<any>{
  const url = 'http://localhost:9000/100clubes/inactivo';
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}

getActiveClubs() : Observable<any>{
  const url = 'http://localhost:9000/100clubes/activo';
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'aplication/json'
    })
  }
  return this.http.get<any>(url,httpOptions);
}
}
