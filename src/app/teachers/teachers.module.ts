import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { EditTeacherComponent } from './teachers-list/edit-teacher/edit-teacher.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeachersListComponent,
    EditTeacherComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,FormsModule
  ]
})
export class TeachersModule { }
