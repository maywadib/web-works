// to show event driver programming using node js


// event is implicit module available in nodejs
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("myjob", () => {
    console.log("Sample Event is invoked...");
});


eventEmitter.on("maths", (num1, num2) => {
    console.log(num1 + num2);

});



eventEmitter.emit("maths", 10, 20);
eventEmitter.emit("myjob");



class Person extends EventEmitter {
    constructor(name, salary) {
        super();
        this._name = name;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name
    }


    get salary() {
        return this._salary;
    }

    set salary(salary) {
        this._salary = salary
    }
}

let person1 = new Person("Mayur", 100000);
let person2 = new Person("Kartik", 1000230);

person1.on("person", () => {
    console.log("Person name :" + person1._name);
    console.log("Person salary :" + person1._salary);
});

person2.on("person", () => {
    console.log("Person name :" + person2._name);
    console.log("Person salary :" + person2._salary);
});


person1.emit("person");
person2.emit("person");

