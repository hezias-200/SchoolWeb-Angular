import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TeachersModule } from './teachers/teachers.module';
import { EmployeesModule } from './employees/employees.module';
import { PupilsModule } from './pupils/pupils.module';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
   ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TeachersModule,
    EmployeesModule,
    PupilsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

