import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseApiUrl: string = environment.baseApiUrl; 

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.baseApiUrl + '/all').pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  getFilterByRegion(region: any):Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseApiUrl}/region/${region}`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  getSearchByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseApiUrl}/name/${name}`).pipe(
      debounceTime(300),
      filter(() => name.length >= 3),
      distinctUntilChanged()
    );
  }

  getSearchByCode(code: string | null): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseApiUrl}/alpha/${code}`).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}