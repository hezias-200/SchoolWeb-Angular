import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PUPILS } from './dummy-data-pupils';
import { Pupil } from './Pupil';

@Injectable({
  providedIn: 'root'
})
export class PupilsService {

  constructor() { }
  getPupils():Observable<Pupil[]>{
    return of(PUPILS);
  }
  findPupilById( id:number | string){
    return this.getPupils().pipe(
      map((pupil:Pupil[])=>pupil.find(p=> p.id === +id)!)
    )
}
}
