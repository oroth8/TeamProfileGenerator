const Employee = require("./Employee");

class Intern extends Employee{
constructor(name,id,email,school){
    super(name,id,email);
    this.school=school;
}
getRole(){
    return "Intern";
}
getSchool(){
    return this.school;
}

}
// const test1=new Manager("owen",20,"z@gmail.com",007);
// console.log(test1);
module.exports = Intern;