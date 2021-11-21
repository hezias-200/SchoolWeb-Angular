import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPLOYEES } from './dummy-data-employees';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }
  getEmployees():Observable<Employee[]>{
    return of(EMPLOYEES);
  }
  findEmployeesById( id:number | string){
    return this.getEmployees().pipe(
      map((pupil:Employee[])=>pupil.find(e=> e.id === +id)!)
    )
}
}
