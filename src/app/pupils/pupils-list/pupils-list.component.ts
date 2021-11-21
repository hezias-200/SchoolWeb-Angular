import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pupil } from '../Pupil';
import { PupilsService } from '../pupils.service';

@Component({
  selector: 'app-pupils-list',
  templateUrl: './pupils-list.component.html',
  styleUrls: ['./pupils-list.component.css']
})
export class PupilsListComponent implements OnInit {
  pupils:Pupil[]=[];
  constructor(private service:PupilsService) { }

  ngOnInit(): void {
    this.service.getPupils().subscribe(pupils=>
      this.pupils=pupils)
  }

}
