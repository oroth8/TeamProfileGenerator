const Employee = require("./Employee");

class Engineer extends Employee{
constructor(name,id,email,github){
    super(name,id,email);
    this.github=github;
}
getRole(){
    return "Engineer";
}
getGithub(){
    return this.github;
}

}
// const test1=new Manager("owen",20,"z@gmail.com",007);
// console.log(test1);
module.exports = Engineer;
