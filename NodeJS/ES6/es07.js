let p1 = {
    name: "Mayur",
    city: "Bengaluru",
    email: "m@ps.com"
};

console.log(p1);

let name1 = p1.name;
let city1 = p1.city;
let email1 = p1.email

console.log(name1);
console.log(city1);
console.log(email1);

//name city and email will be mapped to that of p1
// use the same name
let { name, city, email } = p1;
console.log(name);
console.log(city);
console.log(email);


//undefined
let { _name, _city, _email } = p1;
console.log(_name);
console.log(_city);
console.log(_email);

function sayHello({ name, city }) {

    console.log("Function - name " + name);
    console.log("Function - city " + city);


}
function sayHello1( name, city ) {

    console.log("Function - name " + name);
    console.log("Function - city " + city);


}

sayHello1("Mayur","bengaluru")
console.log("------------");

sayHello({ name: "Mayur", city: "Bengaluru" });
sayHello(p1);

/**
 Function - name Mayur
Function - city bengaluru
------------
Function - name Mayur
Function - city Bengaluru
Function - name Mayur
Function - city Bengaluru
 */