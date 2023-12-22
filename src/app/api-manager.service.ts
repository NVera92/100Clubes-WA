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

}
