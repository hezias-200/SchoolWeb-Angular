import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPupilComponent } from './pupils-list/edit-pupil/edit-pupil.component';
import { PupilsListComponent } from './pupils-list/pupils-list.component';

const routes: Routes = [
  {path:'pupils',component:PupilsListComponent},
  {path:'editPupil/:id',component:EditPupilComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PupilsRoutingModule { }
