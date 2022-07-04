import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, take, tap } from 'rxjs';
import { CommonEnum } from '../enums';
import { Department, Employee, Holiday, Location } from '../models';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class RestService {
  constructor(private http: HttpClient, private localstorageService: LocalStorageService) {}

  getHolidays() {
    const key = CommonEnum.Plural.HOLIDAYS;
    return this.http.get<Holiday[]>(key).pipe(tap(this.store.call(this, key))) as Observable<
      Holiday[]
    >;
  }

  getDepartments() {
    const key = CommonEnum.Plural.DEPARTMENTS;
    return this.http.get<Department[]>(key).pipe(tap(this.store.call(this, key))) as Observable<
      Department[]
    >;
  }

  getEmployees() {
    const key = CommonEnum.Plural.EMPLOYEES;
    return this.http.get<Employee[]>(key).pipe(tap(this.store.call(this, key))) as Observable<
      Employee[]
    >;
  }

  getLocations() {
    const key = CommonEnum.Plural.LOCATIONS;
    return this.http.get<Location[]>(key).pipe(tap(this.store.call(this, key))) as Observable<
      Location[]
    >;
  }

  getAll() {
    const observables = [
      this.getHolidays(),
      this.getDepartments(),
      this.getEmployees(),
      this.getLocations(),
    ];

    return forkJoin(observables).pipe(take(1));
  }

  private store<T = any>(key: string) {
    const projector = (val: T[]) => {
      const isCached = this.localstorageService.get(key);
      !isCached && this.localstorageService.set(key, val);

      return val;
    };

    return projector;
  }
}
