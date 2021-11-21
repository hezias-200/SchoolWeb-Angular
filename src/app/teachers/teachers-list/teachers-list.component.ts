import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Teacher } from '../Teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
   teachers:Observable<Teacher[]>;
   selectedId=0;
  constructor(private service:TeacherService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.teachers=this.route.paramMap.pipe(
      switchMap(params=>{
        this.selectedId=parseInt(params.get("id"));
        return this.service.getTeachers();
      })
    )
  }


}
