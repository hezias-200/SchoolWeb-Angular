import { Person } from "../Person";

export class Employee extends Person{
    
    constructor(id:number,fullName:string, age:number, Hometown:string,private jobTitle:string,private workHoursInMonth:number,private moneyPerHour:number,img:string){
        super(id,fullName,age,Hometown,img);
    }
    public checkSalary(){
        let sum:number=this.moneyPerHour*this.workHoursInMonth
        return sum

    }


}