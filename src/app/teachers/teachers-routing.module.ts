import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTeacherComponent } from './teachers-list/edit-teacher/edit-teacher.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';

const routes: Routes = [
{ path: 'teachers', component: TeachersListComponent},
{ path: 'editTeacher/:id', component: EditTeacherComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
