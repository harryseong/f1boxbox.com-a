import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErgastApiService {

  constructor(private http: HttpClient) { }

  getConstructors(season: number): Observable<any> {
    return this.http.get<any>(`${environment.api.ergast.apiUrl}/${season}/constructors.json`);
  }

  getDrivers(season: number): Observable<any> {
    return this.http.get<any>(`${environment.api.ergast.apiUrl}/${season}/drivers.json`);
  }
}
