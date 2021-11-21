import { Class } from "../Class" 
import  {Person}  from "../Person" 


export class Teacher extends Person  {
    teacherProfessions: string[]
    arrayOfClasses: Class[]
    seniority: number
    numOfWorkHours: number
    salary: number
constructor(id:number,fullName:string, age:number, Hometown:string,seniority: number,numOfWorkHours: number,salary: number,teacherProfessions: string[],arrayOfClasses: Class[],img:string)
{
    super(id,fullName, age, Hometown,img)
    
    this.seniority=seniority
    this.numOfWorkHours=numOfWorkHours
    this.salary=salary
    this.arrayOfClasses=arrayOfClasses
    this.teacherProfessions=teacherProfessions
}


}