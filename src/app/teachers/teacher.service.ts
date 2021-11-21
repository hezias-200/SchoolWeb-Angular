import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {TEACHERS} from './dummy-data-teachers'
import { Teacher } from './Teacher';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor() { }

  getTeachers():Observable<Teacher[]>{
    return of(TEACHERS);
  }
  findTeacherById( idTeacher:number | string){
    return this.getTeachers().pipe(
      map((teacher:Teacher[])=>teacher.find(t=> t.id === +idTeacher)!)
    )


  }
}
