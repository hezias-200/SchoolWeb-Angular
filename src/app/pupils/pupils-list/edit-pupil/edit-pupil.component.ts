import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pupil } from '../../Pupil';
import { PupilsService } from '../../pupils.service';

@Component({
  selector: 'app-edit-pupil',
  templateUrl: './edit-pupil.component.html',
  styleUrls: ['./edit-pupil.component.css']
})
export class EditPupilComponent implements OnInit {
  pupil:Observable<Pupil>;
  constructor(private route:ActivatedRoute,private router:Router,private service:PupilsService) { 
  }

  ngOnInit(): void {
    this.pupil=this.route.paramMap.pipe(
      switchMap((params:ParamMap)=>
      this.service.findPupilById(params.get('id')))
    )
  }
  goBack(){
    this.router.navigate(['/pupils']);
  }
}
