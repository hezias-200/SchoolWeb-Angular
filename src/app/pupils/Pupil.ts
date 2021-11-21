import { Class } from "../Class";
import { Person } from "../Person";

export class Pupil extends Person {
    public class: Class
    public Professions: Object[] = []
    constructor(id: number, fullName: string, age: number, Hometown: string, classP: Class, Professions: Object[],img:string) {
        super(id, fullName, age, Hometown,img);
        this.class = classP;
        this.Professions = Professions;

    }
    public avgTests() {
        let grade = 0
        for (let index = 0; index < this.Professions.length; index++) {
            const element = this.Professions[index];
            Object.keys(element).forEach(key =>
                grade += element[key])
        }
        return grade/this.Professions.length
    }
}
