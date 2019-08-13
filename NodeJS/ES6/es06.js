//you can have only one constructor


class Person {
    // constructor() {
    //     this.name = "Mayur"
    //     this.email = "mayur@ps.com"
    // }
    constructor(_name, _email) {
        this.name = _name
        this.email = _email
    }

    printPerson() {
        console.log("Name " + this.name);
        console.log("Email " + this.email);

    }

}


let p1 = new Person();
console.log(p1);
console.log(typeof (p1));
console.log(typeof ("Hello"));
console.log(typeof (12));


let p2 =new Person("Gaurav","gaurav@ps.com")
console.log(p2);


///accepted
let p3 = new Person("kumar");
console.log(p3);


class Employee extends Person {
    constructor(_name,_email,_empId){
        super(_name,_email);
        this.empId =_empId
    }
}


let e1 = new Employee("kumar","k@gmail.com",23);
console.log(e1);

