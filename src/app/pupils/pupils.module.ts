import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PupilsRoutingModule } from './pupils-routing.module';
import { PupilsListComponent } from './pupils-list/pupils-list.component';
import { EditPupilComponent } from './pupils-list/edit-pupil/edit-pupil.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PupilsListComponent,
    EditPupilComponent
  ],
  imports: [
    CommonModule,
    PupilsRoutingModule,
    FormsModule
  ]
})
export class PupilsModule { }
