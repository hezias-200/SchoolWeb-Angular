import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Teacher } from '../../Teacher';
import { TeacherService } from '../../teacher.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  teacher:Observable<Teacher>;

  constructor(private route:ActivatedRoute,private router:Router,private service:TeacherService) { 
    

  }

  ngOnInit(): void {
    this.teacher=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.service.findTeacherById(params.get('id')))
    )
  }
  goBack(){
    this.router.navigate(['/teachers']);
  }
  

}
