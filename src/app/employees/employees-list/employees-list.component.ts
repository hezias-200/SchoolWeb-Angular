import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees:Employee[]=[];
  constructor(private service:EmployeesService) { }

  ngOnInit(): void {
    this.service.getEmployees().subscribe(employee=>
      this.employees=employee)
  }
  

}
