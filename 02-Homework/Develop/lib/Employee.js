class Employee{
    constructor(name,id,email){
        this.name = name;
        this.id= id;
        this.email= email;
        this.role="Employee";
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return this.role;
    }

}
// const test = new Employee ("owen", 1, "o@gmail.com");
// console.log(test.getName());
// console.log(test.getId());
// console.log(test.getEmail());
// console.log(test.getRole());

module.exports = Employee;