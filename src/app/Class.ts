import { Teacher } from "./teachers/Teacher"
import { TeacherService } from "./teachers/teacher.service"
export class Class{
    public teacher:Teacher
constructor(public idClass:string, public nameClass:string,public numOfStudent:number ,public locationOfClassInSchool)
{}
}
